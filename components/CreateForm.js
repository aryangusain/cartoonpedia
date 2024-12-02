'use client'

import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import { Button } from './ui/button'
import createSearchName from '@/utils/createSearchName'
import axios from 'axios'

function CreateForm({ session }) {
  const [status, setStatus] = useState(-1);

  const [character, setCharacter] = useState({
    image: "/noimage.jpg",
    name: "",
    searchName: "",
    description: "",
    createdBy: {
      email: session?.user.email,
      name: session?.user.name,
      image: session?.user.image
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/create', character);
      console.log(response.data.status);
      setStatus(response.data.status);
    }
    catch(error) {
      console.error('Error: ', error);
    }
  } 

  return (
    <div className='max-h-fit flex flex-col justify-between items-center min-w-64 lg:min-w-80'>
        <h2 className='text-xl mb-8'>Create a new character</h2>
        <div className='flex flex-col justify-center gap-6 items-center max-h-fit w-full'>
            <form className='flex flex-col justify-center items-center gap-4 w-full'>
              <ImageUpload character={character} setCharacter={setCharacter}/>
              <input type='text' onChange={(e) => setCharacter({...character, name: e.target.value, searchName: createSearchName(e.target.value)})} name='name' id='name' placeholder='name' className='w-full bg-transparent border border-gray-800 rounded-lg py-1 px-2' required></input>
              <textarea name='description' onChange={(e) => setCharacter({...character, description: e.target.value})} id='description' placeholder='description' className='w-full bg-transparent border border-gray-800 rounded-lg py-1 px-2 min-h-24 no-scrollbar' required></textarea>
              <Button className="w-full text-base" onClick={handleSubmit}>Create</Button>
            </form>
           {(status == 500) ? <p className='text-red-500'>error occured. please try again!</p> :
            ((status == 409) ? <p className='text-red-500'>character already exists!</p> :
            ((status == 201) ? <p className='text-green-500'>new character created successfully!</p> : null))}
        </div>
    </div>
  )
}

export default CreateForm