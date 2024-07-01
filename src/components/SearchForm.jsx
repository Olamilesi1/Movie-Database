// import React, { useState, useContext } from "react";
// import { MovieContext } from "./MovieContext";

// function SearchForm() {
//     const [title, setTitle] = useState('');
//     const { setSearchQuery } = useContext(MovieContext);

//     const handleChange = (e) => {
//         setTitle(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSearchQuery(title);
//     };

//     return (
//         <div className="title-search">
//             <form onSubmit={handleSubmit} >
//                 <input type="text" name="title" value={title} placeholder="Search For Your Movie Here" onChange={handleChange} />
//                 <button type="submit">Submit</button>
//             </form>

//         </div>

//     )}

//     export default SearchForm

import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";
import { useEffect } from "react";
import logo from "../assets/logo.jpg";

const SearchForm = () => {
  const [showInput, setShowInput] = useState(false);
  const { setSearchQuery, genres } = useContext(MovieContext);
  const [inputValue, setInputValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  const handleSearchClick = () => {
    setShowInput(!showInput);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleGenreClick = (genreId) => {
    const genreElement = document.getElementById(`genre-${genreId}`);
    if (genreElement) {
      genreElement.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleOutsideClick = (event) => {
    const menuElement = document.querySelector(".hamburger-menu");
    if (
      menuElement &&
      !menuElement.contains(event.target) &&
      !event.target.classList.contains("menu")
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="title-search">
      <div className="menu-logo">
        <span
          className="material-symbols-outlined menu"
          onClick={handleMenuToggle}
        >
          menu
        </span>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="menu-item"
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.name}
          </div>
        ))}
      </div>
      <div className="search-setting">
        <span
          className="material-symbols-outlined search"
          onClick={handleSearchClick}
        >
          search
        </span>
        {showInput && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search for a movie..."
            />
            <button type="submit" className="button-search">Search</button>
          </form>
        )}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        {/* <span className="material-symbols-outlined more_horiz">more_horiz</span> */}
      </div>
    </div>
  );
};

export default SearchForm;
