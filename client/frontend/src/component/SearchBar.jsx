import React, { useState } from 'react'


function SearchBar({ movies, setSearchResults }) {
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
        const filtererdMovies = movies.filter(movie => 
            movie.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSearchResults(filtererdMovies);
    }

  return (
    <div>
        <input type='text' placeholder='Search for a movie...' value={search} onChange={handleSearch} />
    </div>
  )
}

export default SearchBar;
