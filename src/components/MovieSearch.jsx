import React from 'react';
import { MovieProvider } from './MovieContext';
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
    const { movieDetail, handleBackToList, imgUrl, favorite, handleFavoriteClick } = React.useContext(MovieContext);

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
                    <button onClick={handleBackToList}>Back To List</button>
                    <MovieDetail movie={movieDetail} imgUrl={imgUrl} onFavoriteClick={handleFavoriteClick} favorite={favorite} />
                </>
            )}
        </div>
    );
};

export default MovieSearch;

// import React, { useContext } from 'react';
// import { MovieContext } from './MovieContext';
// import MovieList from './MovieList';
// import MovieDetail from './MovieDetail';
// import SearchForm from './SearchForm';

// function MovieSearch() {
//   const { genres, moviesByGenre, movieDetail, handleMovieClick, handleBackToList, imgUrl, favorite, handleFavoriteClick, movies, searchQuery} = useContext(MovieContext);

//   return (
//     <div className='movie-genre'>
//       <SearchForm />
//       {!movieDetail ? (
//         <>
//           {searchQuery ? (
//             // Display search results
//             <>
//               <h2>Search Results</h2>
//               <MovieList
//                 movies={movies}
//                 imgUrl={imgUrl}
//                 onMovieClick={handleMovieClick}
//                 favorite={favorite}
//                 onFavoriteClick={handleFavoriteClick}
//               />
//             </>
//           ) : (
//             // Display genres and movies by genre
//             <>
//               {genres.map((genre) => (
//                 <div key={genre.id}>
//                   <h2>{genre.name}</h2>
//                   <MovieList
//                     movies={moviesByGenre[genre.name] || []}
//                     imgUrl={imgUrl}
//                     onMovieClick={handleMovieClick}
//                     favorite={favorite}
//                     onFavoriteClick={handleFavoriteClick}
//                   />
//                 </div>
//               ))}
//             </>
//           )}
//           <h1>Favourites</h1>
//           <div className="favorite">
//             {favorite.map((movie) => (
//               <div key={movie.id} className="movie" onClick={() => handleMovieClick(movie)}>
//                 <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
//                 <p>Title: {movie.title}</p>
//                 <p>Vote Average: {movie.vote_average}</p>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <>
//           <MovieDetail
//             movie={movieDetail}
//             imgUrl={imgUrl}
//             onFavoriteClick={handleFavoriteClick}
//             favorite={favorite}
//           />
//           <button onClick={handleBackToList}>Back To List</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default MovieSearch;

