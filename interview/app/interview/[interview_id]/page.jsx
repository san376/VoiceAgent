"use client"
import React, { useContext, useEffect, useState } from 'react'
import InterviewHeader from '../_components/InterviewHeader'
import Image from 'next/image'
import { Clock, Info, Loader2Icon, Video } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/services/supabaseClient'
import { toast } from 'sonner'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import QuestionList from '@/app/(main)/dashboard/create-interview/_components/QuestionList'

function Interview() {

    const {interview_id}=useParams();
    console.log(interview_id);
    const [interviewData, setInterviewData]=useState();
    const [userName,setUserName]=useState();
    const [loading,setLoading]=useState(false);
    const {interviewInfo, setInterviewInfo}=useContext(InterviewDataContext);
    const router=useRouter();

    useEffect(()=>{
        interview_id&&GetInterviewDetails();
    },[interview_id])


    const GetInterviewDetails = async()=>{
        setLoading(true);
        try {
            let {data: Interviews,error}= await supabase
             .from('Interviews')
             .select("jobPosition,jobDescription,duration,type")
             .eq('interview_id',interview_id)

        setInterviewData(Interviews[0]);
        setLoading(false);
        if(Interviews?.length ==0 ){
            toast("Incorrect Interview Link");
        }
        } catch (e) {
            setLoading(false)
            toast("Incorrect Interview Link")
        }
    }

    const onjoinInterview=async()=>{
        setLoading(true)
        let {data:Interviews, error}= await supabase
             .from('Interviews')
             .select('*')
             .eq('interview_id',interview_id)

        console.log(Interviews[0]);     
        setInterviewInfo({
            userName:userName,
            interviewData:Interview[0]
        });
        router.push('/interview/'+interview_id+'/start')
        setLoading(false )
    }

    return (
        <div className='px-10 md:px-28 lg:px-48 xl:px-64 mt-5'>
            <div className='flex flex-col items-center justify-center border rounded-lg bg-white p-7 lg:px-33 xl:px-52 mb-10'>
                <Image src={'/voice.png'} alt='logo' width={200} height={100}
                    className='w-[140px] '
                />
                <h2 className='mb-10'>AI-Powered Interview Platform</h2>


                <Image src={'/interview.jpeg'} alt='interview'
                    width={500}
                    height={500}
                    className='w-[580px] -my-5'
                />
                <h2 className='font-bold text-xl mt-8'>{interviewData?.jobPosition}</h2>
                <h2 className='flex gap-2 items-center text-gray-500 mt-3'><Clock className='h- w-4' />{interviewData?.duration}</h2>

                <div className='w-full'>
                    <h2>Enter your full name</h2>
                    <Input placeholder='e.g. John Smith' onChange={(event)=>setUserName(event.target.value)} className='mt-1' />
                </div >
                <div className='p-3 bg-blue-100 flex flex-col gap-4 rounded-lg mt-2 w-full '>
                    <div >

                        <h2 className='font-bold flex  gap-3'><Info className='text-primary' />Before you begin</h2>
                        <ul className='mt-'>
                            <li className='text-sm text-primary'>Ensure you have a stable Internet Connection</li>
                            <li className='text-sm text-primary'>Test your camera and microphone</li>
                            <li className='text-sm text-primary'>Find a Quiet place for interview</li>
                        </ul>
                    </div>
                </div>
                <Button className='mt-3 w-full font-bold' disabled={loading || !userName} 
                onClick={()=>onjoinInterview()}
                > <Video/> {loading&& <Loader2Icon/> } Join Interview</Button>
            </div>
        </div>
    )
}

export default Interview
