'use client';

import CharacterCard from "@/components/CharacterCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState(-1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios.get('/api/fetch')
    .then((response) => {
      if(Array.isArray(response.data.characters)) {
        setCharacters(response.data.characters);
      }
      setStatus(response.data.status);
    })
    .catch(error => console.log(error));

    setLoading(false);
  }, []);

  return (
    <div className="flex flex-wrap gap-12 justify-center items-center w-3/4 md:w-2/3 lg:1/2">
      { (loading) ? <p className="">Loading ...</p>
        : (
          (characters.length > 0) 
          ? 
          characters.map((character, index) => <CharacterCard key={index} character={character} />)
          :
          ((status == 500) ? <p className="text-red-500">Error Occurred. Please Reload the page.</p> 
          :
          <p>No Characters Exist!</p>)
        ) 
      }
    </div>
  );
}
