'use client'
import { useUser } from '@/app/provider'
import React from 'react'

function WelcomeContainer() {
    const {user} = useUser();
 if (!user) {
    return <div>Loading...</div>; // or return null, spinner, etc.
  }

  return (
    <div>
      <div>Welcome, {user.name}</div>
    </div>
  );
}

export default WelcomeContainer
