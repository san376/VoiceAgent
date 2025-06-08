import { TimerIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function InterviewComplete() {
    return (
        <div>
            <div className='flex flex-col items-center justify-center mt-3'>
                <Image src={'/check.jpeg'} alt='ai'
                    width={100}
                    height={100}
                    className='w-[60px] h-[60px] rounded-full object-cover'
                />
                <h2 className='font-bold mt-3 text-2xl'>Interview Completed!</h2>
                <h2 >Thank you for participating in AI-driven interview with AIcruiter</h2>
                <Image src={'/interview.jpeg'} alt='ai'
                    width={600}
                    height={400}
                    className=' object-cover mt-4'
                />
            </div>
            <div className='flex flex-col items-center justify-center mt-4 bg-blue-50'>
                <h2 className='text-2xl font-bold'>What's Next</h2>
                <p>The recruiter will review your interview responses and will contact you</p>
                <p>Soon regarding the next step</p>
                <div className='flex gap-4'>
                    <TimerIcon/>
                    Responses within 2-3 business days
                </div>
            </div>
        </div>
    )
}

export default InterviewComplete
