# ==========================================
# Stage 1: Build the React Frontend
# ==========================================
FROM node:24-alpine AS frontend-build
WORKDIR /src/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# ==========================================
# Stage 2: Build the .NET Backend
# ==========================================
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS backend-build
WORKDIR /src/backend
COPY backend/*.csproj ./
RUN dotnet restore
COPY backend/ ./
RUN dotnet build backend.csproj -c Release -o /app/build

# ==========================================
# Stage 3: Publish & Merge Frontend into Backend
# ==========================================
FROM backend-build AS publish
RUN dotnet publish backend.csproj -c Release -o /app/publish
# Copy compiled static frontend assets into .NET's web root
COPY --from=frontend-build /src/frontend/dist /app/publish/wwwroot

# ==========================================
# Stage 4: Final Lean Runtime Image
# ==========================================
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 80
ENV ASPNETCORE_URLS=http://+:80
ENTRYPOINT ["dotnet", "backend.dll"]