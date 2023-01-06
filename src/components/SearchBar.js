import './css/searchBar.css'

import { useState } from 'react'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm("")
  };

  const handleChange = (event) => {
    //console.log(event.target.value)
    setTerm(event.target.value);

  }

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default SearchBar;
