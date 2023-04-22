import "./style.css";
import fetchCurrentWeather from "./src/fetchCurrentWeather";
import appendWeather from "./src/appendWeather";

const searchWeatherBtn = document.getElementById("search-weather-btn");
const searchWeatherInput = document.getElementById("search-weather-input");

searchWeatherBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const input = searchWeatherInput.value;

  if (input === "") return;

  fetchCurrentWeather(input).then((data) => {
    appendWeather(data);
    searchWeatherInput.value = "";
  });
});

///---------------------------------------------------------

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
