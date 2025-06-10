import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
function CandidateFeedbackDialog({ candidate }) {
    const feedback = candidate?.feedback?.feedback
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={outline} className='text-primary'>View Report</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Feedback</DialogTitle>
                        <DialogDescription>
                            <div className='mt-5'>
                                <div className='flexx justify-between items-center'>
                                    <div className='flex items-center gap-5'>
                                        <h2 className='bg-primary p-3 px-5 font-bold text-white rounded-full'>{candidate.userName[0]}</h2>
                                        <div>
                                            <h2 className='font-bold text-2xl'>{candidate?.userName}</h2>
                                            <h2 className='text-gray-500 text-sm'>{candidate?.userEmail}</h2>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <h2 className='text-green-500 text-2xl font-bold'>7.5/10</h2>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h2 className='font-bold'>Skills Assesment</h2>
                                    <div className='mt-3 grid grid-cols-2 gap-10'>
                                        <div>
                                            <h2 className='flex justify-between'>Technical Skills <span>{feedback?.rating?.technicalSkills}/10</span></h2>
                                            <Progress value={feedback?.rating?.technicalSkills * 10} className='mt-1' />
                                        </div>
                                        <div>
                                            <h2 className='flex justify-between'>Communication <span>{feedback?.rating?.communication}/10</span></h2>
                                            <Progress value={feedback?.rating?.communication * 10} className='mt-1' />
                                        </div>
                                        <div>
                                            <h2 className='flex justify-between'>Problem Solving <span>{feedback?.rating?.problemsolving}/10</span></h2>
                                            <Progress value={feedback?.rating?.problemsolving * 10} className='mt-1' />
                                        </div>
                                        <div>
                                            <h2 className='flex justify-between'>Experience <span>{feedback?.rating?.experience}/10</span></h2>
                                            <Progress value={feedback?.rating?.experience * 10} className='mt-1' />
                                        </div>
                                    </div>
                                </div>


                                <div className='mt-5'>
                                    <h2 className='font-bold'>Performance Summary</h2>
                                    <div className='p-5 bg-secondary my-3 rounded-md'>
                                        {feedback?.summary?.map((summary, index) => (
                                            <p key={index}>{summary} </p>
                                        ))}
                                    </div>
                                </div>


                                <div className={`p-5 mt-10 flex items-center justify-between rounded-md ${feedback?.Recommendation=='NO'?'bg-red-100':'bg-green-100'} `}>
                                    <div>
                                        <h2 className={` font-bold${feedback?.Recommendation=='NO'?'text-red-700':'text-green-700'} `}>Recommendation Msg:</h2>
                                    <p className={`${feedback?.Recommendation=='NO'?'text-red-500':'text-green-500'} `}>{feedback?.RecommendationMsg}</p>
                                    </div>
                                    <Button className={`${feedback?.Recommendation=='NO'?'text-red-700':'text-green-700'} `}>Send Msg</Button>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CandidateFeedbackDialog
