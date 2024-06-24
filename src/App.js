

import React from 'react';
import './App.css';
import MovieSearch from './components/MovieSearch';
import { MovieProvider } from './components/MovieContext';

function App() {
    return (
      <div className='component'>
        <MovieProvider>
  
                <MovieSearch />
      
        </MovieProvider>
      </div>
    );
}

export default App;
