// import React, { createContext, useState, useEffect } from 'react';

// const MovieContext = createContext();

// const MovieProvider = ({ children }) => {
//     const [movies, setMovies] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [movieDetail, setMovieDetail] = useState(null);
//     const [favorite, setFavorite] = useState([]);

//     const imgUrl = "https://image.tmdb.org/t/p/w500";
//     const apiKey = "c7cba54e8036127f06f9792f9781dbad";
//     const baseUrl = "https://api.themoviedb.org/3";
//     const apiUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
//     const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&query=`;

//     useEffect(() => {
//         fetch(apiUrl)
//             .then((response) => response.json())
//             .then((data) => setMovies(data.results))
//             .catch((error) => console.error("Error fetching movies:", error));
//     }, []);

//     useEffect(() => {
//         if (searchQuery) {
//             fetch(searchUrl + searchQuery)
//                 .then((response) => response.json())
//                 .then((data) => setMovies(data.results))
//                 .catch((error) => console.error("Error searching movies:", error));
//         }
//     }, [searchQuery]);

//     useEffect(() => {
//         const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
//         if (storedFavorites) {
//             setFavorite(storedFavorites);
//         }
//     }, []);

//     useEffect(() => {
//         if (favorite.length > 0) {
//             localStorage.setItem('favorites', JSON.stringify(favorite));
//         } else {
//             localStorage.removeItem('favorites');
//         }
//     }, [favorite]);

//     const handleMovieClick = (movie) => {
//         setMovieDetail(movie);
//     };

//     const handleBackToList = () => {
//         setMovieDetail(null);
//     };

//     const handleFavoriteClick = (movie) => {
//         if (!favorite.some(fav => fav.id === movie.id)) {
//             setFavorite([...favorite, movie]);
//         } else {
//             setFavorite(favorite.filter(fav => fav.id !== movie.id));
//         }
//     };

//     return (
//         <MovieContext.Provider value={{ movies, setSearchQuery, movieDetail, handleMovieClick, handleBackToList, favorite, handleFavoriteClick, imgUrl }}>
//             {children}
//         </MovieContext.Provider>
//     );
// };

// export { MovieContext, MovieProvider };


import React, { createContext, useState, useEffect } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [movieDetail, setMovieDetail] = useState(null);
  const [favorite, setFavorite] = useState([]);
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});

  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const apiKey = "c7cba54e8036127f06f9792f9781dbad";
  const baseUrl = "https://api.themoviedb.org/3";
  const apiUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
  const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&query=`;
  const genresUrl = `${baseUrl}/genre/movie/list?api_key=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
      
      fetch(genresUrl)
        .then((response) => response.json())
        .then((data) => setGenres(data.genres))
        .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      console.log("Search Query Changed:", searchQuery);
      console.log("Fetching search results for:", searchQuery);
      fetch(searchUrl + searchQuery)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          console.log("Search Results:", data.results);
        })
        .catch((error) => console.error("Error searching movies:", error));
    } else {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.error("Error fetching movies:", error));
    }
  }, [searchQuery]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorite(storedFavorites);
    }
  }, []);

  useEffect(() => {
    if (favorite.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorite));
    } else {
      localStorage.removeItem("favorites");
    }
  }, [favorite]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      const genreMovies = {};
      for (let genre of genres) {
        const url = `${baseUrl}/discover/movie?with_genres=${genre.id}&api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        genreMovies[genre.name] = data.results;
      }
      setMoviesByGenre(genreMovies);
    };

    if (genres.length > 0) {
      fetchMoviesByGenre();
    }
  }, [genres]);

  const handleMovieClick = (movie) => {
    setMovieDetail(movie);
  };

  const handleBackToList = () => {
    setMovieDetail(null);
  };

  const handleFavoriteClick = (movie) => {
    if (!favorite.some((fav) => fav.id === movie.id)) {
      setFavorite([...favorite, movie]);
    } else {
      setFavorite(favorite.filter((fav) => fav.id !== movie.id));
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        genres,
        moviesByGenre,
        movieDetail,
        handleMovieClick,
        handleBackToList,
        favorite,
        handleFavoriteClick,
        imgUrl,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };


