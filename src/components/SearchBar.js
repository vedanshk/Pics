import React from 'react'
import { useState } from 'react';
function SearchBar({onSubmit}) {

  const [term , setTerm] = useState('');

  const handleFormSubmit =(e)=>{
    e.preventDefault();

    onSubmit(term)
    

  }

  const handleChange = (e) =>{
    setTerm(e.target.value.replace(/a-z/, ''));
  }
  return (
    <form onSubmit={handleFormSubmit}  >
      
      Enter Search Term <input type="text" value={term}  name="term" onChange={handleChange}/>
      <button type='submit'>Search</button>

      </form>
  )
}

export default SearchBar;