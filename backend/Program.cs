var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(); // 1. Added this to support Controllers later
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// 2. MONOLITH SETUP: Serve React frontend static files
app.UseDefaultFiles();   // Looks for index.html automatically
app.UseStaticFiles();    // Serves the compiled JS/CSS from the wwwroot folder

// Note: If you face HTTPS redirection issues in your local Docker container later,
// you can comment out or remove app.UseHttpsRedirection(). AWS Lightsail handles SSL at the gateway.
app.UseHttpsRedirection();

app.UseRouting();        // 3. Added to handle route matching
app.UseAuthorization();

// Map your API controllers
app.MapControllers();    // 4. Added to look for your future backend controllers

// --- Sample Weather API (Kept from your template) ---
var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/api/weatherforecast", () => // 5. Prepended /api/ so it doesn't conflict with frontend routing
{
    var forecast =  Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");
// -----------------------------------------------------

// 6. MONOLITH SETUP: Fallback route for Single Page Application (SPA)
// If a user refreshes the page on a frontend route like /dashboard,
// this tells .NET to hand routing over to React instead of throwing a 404.
app.MapFallbackToFile("index.html");

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}