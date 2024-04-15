import React, { useState, useEffect } from 'react';
import SearchBar from './component/SearchBar';
import './App.css';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movies')
        }
        const data = await response.json();
        setMovies(data);
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Movies</h1>
      <SearchBar movies={movies} setSearchResults={setSearchResults} />
      <ul>
        {searchResults.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
