import inquirer from 'inquirer';
import axios from 'axios';

inquirer.prompt([
    {
        message: "Enter a location: ",
        name: "location"
    }
])
.then(async (answers) => {
    let location = answers.location;

    if (!location) {
        console.log("location must not be empty!")
        return;
    }

    const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`);

    if (!response.data.results || response.data.results.length === 0) {
        console.log("Location not found!");
        return;
    }

    let latitude = response.data.results[0].latitude
    let longitude = response.data.results[0].longitude

    const weather = await axios.get("https://api.open-meteo.com/v1/forecast",
        {
            params: {
                latitude: latitude,
                longitude: longitude,
                current: "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,weather_code,wind_speed_10m" 
            }
        }
    )

    const current = weather.data.current;

    console.log("\n=================================");
    console.log("         CURRENT WEATHER");
    console.log("=================================");
    console.log(`  Location     :  ${location}`);
    console.log(`  Latitude     :  ${latitude}`);
    console.log(`  Longitude    :  ${longitude}`);
    console.log("---------------------------------");
    console.log(`  Temperature  :  ${current.temperature_2m}°C`);
    console.log(`  Feels Like   :  ${current.apparent_temperature}°C`);
    console.log(`  Humidity     :  ${current.relative_humidity_2m}%`);
    console.log(`  Precipitation:  ${current.precipitation} mm`);
    console.log(`  Rain         :  ${current.rain} mm`);
    console.log(`  Weather Code :  ${current.weather_code}`);
    console.log(`  Wind Speed   :  ${current.wind_speed_10m} km/h`);
    console.log("=================================\n");
})
.catch((error) => {
    console.error(error);
});