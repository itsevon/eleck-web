'use client';
import React, { use } from 'react'
import { LoginButton, LogoutButton } from '@/components/AuthenticateButton'
import  IsLoggedin from '@/components/IsLoggedin'

export default function Home() {
    return (
    <main className='flex h-screen justify-center items-center'>
  <div className='text-center'>
    <h1 className='text-4xl font-bold'>Next Auth</h1>
    <IsLoggedin/>
    <LoginButton/>
    <LogoutButton/>
  </div>
</main>

  )
}
