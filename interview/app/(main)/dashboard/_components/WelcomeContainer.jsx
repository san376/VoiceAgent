'use client'
import { useUser } from '@/app/provider'
import Image from 'next/image';
import React from 'react'

function WelcomeContainer() {
    const {user} = useUser();
 if (!user) {
    return <div>Loading...</div>; // or return null, spinner, etc.
  }

  return (
    <div className='bg-white p-3 rounded-xl flex justify-between items-center'>
      <div>
        <h2 className='text-lg font-bold'>Welcome, {user.name}</h2>
        <h2 className='text-gray-400'>AI-Driven Interviews, Hassel-Free Hiring</h2>
      </div>
     {user&& <Image src={user?.picture} alt='userAvatar' width={40} height={40} className='rounded-full'/>}
    </div>
  );
}

export default WelcomeContainer
