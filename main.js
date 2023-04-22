import "./style.css";

const jsonMovieData =
  '{"title": "My Favorite Movies","movies": [{"title": "The Shawshank Redemption","year": 1994,"director": "Frank Darabont"},{"title": "The Godfather","year": 1972,"director": "Francis Ford Coppola"},{"title": "The Dark Knight","year": 2008,"director": "Christopher Nolan"}]}';

const movieData = JSON.parse(jsonMovieData);

const title = document.createElement("h1");
title.textContent = movieData.title;

const app = document.getElementById("app");
app.appendChild(title);

movieData.movies.forEach((movie) => {
  const movieContainer = document.createElement("div");
  movieContainer.classList.add("movie-container");

  const h2 = document.createElement("h2");
  h2.textContent = movie.title;

  const h3 = document.createElement("h3");
  h3.textContent = movie.year;

  const p = document.createElement("p");
  p.textContent = movie.director;

  movieContainer.append(h2, h3, p);
  app.appendChild(movieContainer);
});
