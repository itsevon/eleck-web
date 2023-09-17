'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
export default function isLoggedIn() {
  const { data: session } = useSession()

  if (!session) {
    return <p>Please login</p>
  }

  return (
    <div>
      {session.user ? `${session.user.email}currently logged in`  : 'loading...'}
    </div>
  )
}