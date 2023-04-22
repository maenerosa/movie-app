import "./style.css";

async function fetchCurrentWeather(city) {
  const API_KEY = "1c48058701c0201afd110d1d061a82ea";
  const CURRENT_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(CURRENT_WEATHER_API);
  const weatherData = await response.json();

  return weatherData;
}

function init(weatherData) {
  const app = document.getElementById("app");

  const h1 = document.createElement("h1");
  h1.textContent = `Right now in ${weatherData.name}, it's ${weatherData.weather[0].description}.`;

  const main = document.createElement("main");
  const weatherIcon = document;

  const iconContainer = document.createElement("div");
  const tempContainer = document.createElement("div");
  const detailsContainer = document.createElement("div");

  main.append(iconContainer, tempContainer, detailsContainer);
  app.append(h1, main);
}

fetchCurrentWeather("Manila").then((data) => init(data));

// -----------------------------------------------------

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// function append(data) {
//   document.body.innerHTML = `
//   <h1>${data.title}</h1>
//   <p>${data.body}</p>`;
// }

// fetchData()
//   .then((data) => append(data))
//   .catch((error) => console.error(error));
/* 
  Create a function that returns a new Promise
  function fetchData() {
    return new Promise((resolve, reject) => {});
  }
**/

/* 
  Inside the Promise object, use the fetch API to get the data
  function fetchData() {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
    });
  }
**/

/* 
  The fetch API is also a Promise so we can catch if its a success/error
  function fetchData() {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
**/
