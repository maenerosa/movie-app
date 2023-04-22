import "./style.css";

async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    //success

    return data;
  } catch (error) {
    throw new Error(error);
  }
  //rejected
}

fetchQuote()
  .then((data) => {
    document.body.innerHTML = `
    <h1>${data[0].author}</h1> 
    <p>${data[0].content}</p>`;
  }) //successful

  .catch((error) => console.error(error)); //rejected

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
