import { Button } from '@/components/ui/button'
import moment from 'moment'
import React from 'react'

function CandidateList({candidateList}) {
  return (
    <div>
      <h2 className='font-bold my-5'>Candidates ({candidateList?.length})</h2>
      {candidateList?.map((candidate,index)=>(
        <div key={index} className='p-5 flex gap-3 items-center justify-between bg-white'>
          <div className='flex items-center gap-5'>
            <h2 className='bg-primary p-3 px-5 font-bold text-white rounded-full'>{candidate.userName[0]}</h2>
          <div>
            <h2>{candidate?.userName}</h2>
            <h2 className='text-gray-500 text-sm'>Completed On: {moment(candidate?.created_at).format('MMM DD, YYY')}</h2>
          </div>
          </div>
          <div className='flex gap-3 items-center'>
            <h2 className='text-green-500'>7.5/10</h2>
            <Button variant={outline} className='text-primary'>View Report</Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CandidateList
