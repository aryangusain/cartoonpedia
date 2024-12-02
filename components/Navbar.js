import React from 'react'
import Logo from './Logo'
import CreateIcon from './CreateIcon'
import SearchIcon from './SearchIcon'
import { auth } from '@/auth'
import SignIn from './sign-in'
import SignOut from './sign-out'
import Link from 'next/link'

async function Navbar() {
  const session = await auth();

  return (
    <div className='flex justify-between items-center py-2 px-4 w-full h-full m-0'>
      <Logo />
      <div className='flex items-center gap-5 '>
        <Link href='/search'><button title='search a character'><SearchIcon className='h-5 w-5'/></button></Link>
        {(session?.user)? <Link href='/create'><button title='create a character'><CreateIcon className='h-6 w-6'/></button></Link>: null}
        {(session?.user)? <SignOut />: <SignIn /> }
      </div>
    </div>
  )
}

export default Navbar