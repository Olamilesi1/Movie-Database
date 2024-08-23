import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function MovieDetail() {
    const { movieDetail, imgUrl, handleFavoriteClick, favorite } = useContext(MovieContext);

    return (
        <div key={movieDetail.id} className="movie-detail">
            <img src={`${imgUrl}${movieDetail.poster_path}`} alt={movieDetail.title} style={{height: '70%' }}/>
            <h3>{movieDetail.title}</h3>
            <p>{movieDetail.overview}</p>
            <p>Vote Average: {movieDetail.vote_average}</p>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <span className="material-symbols-outlined" onClick={() => handleFavoriteClick(movieDetail)} style={{ cursor: 'pointer' }}>
                {favorite.some(fav => fav.id === movieDetail.id) ? 'favorite' : 'favorite_border'}
            </span>
        </div>
    );
}

export default MovieDetail;
