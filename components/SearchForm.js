'use client';

import React, { useState } from 'react'
import SearchIcon from './SearchIcon'
import { Button } from './ui/button'
import axios from 'axios';
import CharacterCard from './CharacterCard';

function SearchForm() {
  const [searchName, setSearchName] = useState("");
  const [character, setCharacter] = useState(null);
  const [status, setStatus] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post('/api/search', {searchName: searchName})
      .then((response) => {
        console.log(response.data.status);
        setCharacter(response.data.character);
        setStatus(response.data.status);
      })
    }
    catch(error) {
      console.error('Error: ', error);
    }
  }

  return (
    <div className='h-full flex flex-col gap-8 items-center min-w-80 lg:min-w-96'>
        <h2 className='text-xl mt-8'>Search a character</h2>
        <div className='flex flex-col justify-center gap-6 items-center max-h-fit w-full'>
            <form className='flex justify-center items-center gap-2 w-full'>
              <input type='text'  onChange={(e) => setSearchName(e.target.value)} name='search' id='search' placeholder='search' className='w-full bg-transparent border border-gray-800 rounded-lg py-2 px-2'></input>
              <Button onClick={handleSubmit}><SearchIcon /></Button>
            </form>
            {
              (status == 200) ? <CharacterCard character={character}/> : 
              ((status == 404) ? <p className='text-red-500'>character does not exist!</p> : null)
            }
        </div>
    </div>
  )
}

export default SearchForm