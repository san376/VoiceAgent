import React from 'react'
import InterviewHeader from '../_components/InterviewHeader'
import Image from 'next/image'

function Interview() {
  return (
    <div className='px-10 md:px-28 lg:px-48 xl:px-64 mt-5'>
      <div className='flex justify-center border rounded-lg bg-white'>
        <Image src={'/voice.png'} alt='logo' width={200} height={100}
        className='w-[140px] '
        />
      </div>
    </div>
  )
}

export default Interview
