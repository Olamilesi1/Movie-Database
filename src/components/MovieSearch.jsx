import React from "react";
import { MovieProvider } from "./MovieContext";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import { MovieContext } from "./MovieContext";

function MovieSearch() {
  return (
    <MovieProvider>
      <MovieContent />
    </MovieProvider>
  );
}

const MovieContent = () => {
  const {
    movieDetail,
    handleBackToList,
    imgUrl,
    favorite,
    handleFavoriteClick,
  } = React.useContext(MovieContext);

  return (
    <div>
      {!movieDetail ? (
        <div>
          <SearchForm />
          <br />
          <MovieList />
        </div>
      ) : (
        <>
          <button class="cta" onClick={handleBackToList}>
            <span>Back To List</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
          <MovieDetail
            movie={movieDetail}
            imgUrl={imgUrl}
            onFavoriteClick={handleFavoriteClick}
            favorite={favorite}
          />
        </>
      )}
    </div>
  );
};

export default MovieSearch;
