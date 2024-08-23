import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function MovieList() {
  const { movies, handleMovieClick, favorite, handleFavoriteClick, imgUrl } =
    useContext(MovieContext);

  return (
    <>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <img
              src={`${imgUrl}${movie.poster_path}`}
              alt={movie.title}
              onClick={() => handleMovieClick(movie)}
              // style={{ cursor: "pointer", width: "100%" }}
            />
            <p>Vote Average: {movie.vote_average}</p>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <span
              className="material-symbols-outlined"
              onClick={() => handleFavoriteClick(movie)}
              style={{ cursor: "pointer" }}
            >
              {favorite.some((fav) => fav.id === movie.id)
                ? "favorite"
                : "favorite_border"}
            </span>
          </div>
        ))}
      </div>

      <h1>Favourite</h1>
      <div className="favourite-item">
        {favorite.map((movie) => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <img
              src={`${imgUrl}${movie.poster_path}`}
              alt={movie.title}
              onClick={() => handleMovieClick(movie)}
              style={{ cursor: "pointer", width: "100%" }}
            />
            <p>Vote Average: {movie.vote_average}</p>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <span
              className="material-symbols-outlined"
              onClick={() => handleFavoriteClick(movie)}
              style={{ cursor: "pointer" }}
            >
              {favorite.some((fav) => fav.id === movie.id)
                ? "favorite"
                : "favorite_border"}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;
