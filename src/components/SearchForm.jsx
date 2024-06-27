import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

function SearchForm() {
    const [title, setTitle] = useState('');
    const { setSearchQuery } = useContext(MovieContext);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(title);
    };


    return (
        <div className="title-search"> 
            <form onSubmit={handleSubmit} >
                <input type="text" name="title" value={title} placeholder="Search For Your Movie Here" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        
        </div>
        
    )}

    export default SearchForm

// import React, { useContext, useState } from 'react';
// import { MovieContext } from './MovieContext';

// const SearchForm = () => {
//     const [showInput, setShowInput] = useState(false);
//   const { setSearchQuery } = useContext(MovieContext);
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Search Query Submitted:", inputValue);  // Debugging log
//     setSearchQuery(inputValue);
//   };

  
//     const handleSearchClick = () => {
//         setShowInput(!showInput);
//     };

//   return (
//     <div className="title-search">

// <span className="material-symbols-outlined menu">menu</span>
//        <div className="search-setting">
//              <span className="material-symbols-outlined search" onClick={handleSearchClick}>search</span>
//             {showInput && (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Search for a movie..."
//       />
//       <button type="submit">Search</button>
//     </form>
//       )}
//                       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
//                       <span className="material-symbols-outlined more_horiz">more_horiz</span>
//                   </div>
//     </div>
//   );
// };

// export default SearchForm;

