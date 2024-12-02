import Image from 'next/image'
import React from 'react'

function CharacterCard({ character }) {
    return (
        <div className='flex flex-col gap-8 items-center bg-white min-h-80 max-h-fit p-4 w-64 rounded-xl'>
            <Image 
                src={character?.image}
                width={200}
                height={200}
                alt='character image'
                className='object-cover w-28 h-28 rounded-full'
            />
            <div className='flex flex-col gap-2 items-center'>
                <p id='name' className='text-black text-base'>{character.name}</p>
                <p id='description' className='text-center text-gray-600 text-sm '>{character.description}</p>
            </div>
            <p className='text-slate-500 text-sm text-left'>Created By: {character.createdBy.name} </p>
        </div>
    )
}

export default CharacterCard