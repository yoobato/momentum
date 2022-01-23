const API_KEY = "1bb6464b0927a02116e40ef6bccac8cf";

const showWeather = async (lat, lng) => {
  const json = await (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
  ).json();

  const locationSpan = document.querySelector("#location");
  locationSpan.innerText = json.name;
  
  const weatherSpan = document.querySelector("#weather");
  weatherSpan.innerText = `${json.main.temp}°C (${json.weather[0].main})`
}

navigator.geolocation.getCurrentPosition((position) => {
  showWeather(position.coords.lat, position.coords.longitude);
}, () => {
  alert("Can't get your location. Display SEOUL's weather");

  // Default location
  showWeather(37.5642135, 127.0016985);
});
