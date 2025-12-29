console.log("Weather App Loaded");

const cityInput = document.getElementById('city');
const searchButton = document.getElementById('search');
const humidity = document.getElementById('humidity');
const region = document.getElementById('region');
const country = document.getElementById('country');
const weatherInfo = document.getElementById('weather-info');
async function getCityData(city) {
    const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=d438e3a6f080475e871152604253110&q=${city}&aqi=no`);
    return await result.json();
}
searchButton.addEventListener('click', async() => {
    console.log(cityInput.value);
    let city = cityInput.value;
    const result = await getCityData(city);
    console.log(result);
    region.innerText ='Region:' + result.location.region;
    country.innerText ='Country:' + result.location.country;
    humidity.innerText ='Humidity:' + result.current.humidity;
    weatherInfo.innerText ='Weather Info:' + result.current.condition.text;
})