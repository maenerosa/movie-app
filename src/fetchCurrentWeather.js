export default async function fetchCurrentWeather(city) {
  const API_KEY = "e72cbe506351290ff39725a41bce3680";
  const CURRENT_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(CURRENT_WEATHER_API);
  const weatherData = await response.json();

  return weatherData;
}
