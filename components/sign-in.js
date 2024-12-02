import React from 'react'
import { signIn } from '@/auth'
import { Button } from './ui/button'

function SignIn() {
  return (
    <form action={ async() => {
        'use server'
        await signIn('google')
      }}>
        <Button>Login</Button>
    </form>
  )
}

export default SignIn;