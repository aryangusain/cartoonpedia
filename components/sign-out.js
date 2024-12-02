import React from 'react'
import { signOut } from '@/auth'
import { Button } from './ui/button'

function SignOut() {
  return (
    <form action={ async() => {
        'use server'
        await signOut()
      }}>
        <Button>Logout</Button>
    </form>
  )
}

export default SignOut;