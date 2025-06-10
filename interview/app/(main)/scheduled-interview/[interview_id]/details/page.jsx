'use client'
import { useUser } from '@/app/provider';
import { useParams } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'
import InterviewDetailContainer from './_components/InterviewDetailContainer';
import { supabase } from '@/services/supabaseClient';
import CandidateList from './_components/CandidateList';

function InterviewDetail() {
    const { interview_id } = useParams();
    const {user} = useUser();
    const [interviewDetail, setInterviewDetail]=useState();

    useEffect(()=>{
        user && GetInterviewDetail();
    },[user])

    const GetInterviewDetail = async () => {
        const result = await supabase.from('Interviews')
            .select(`jobPosition,jobDescription,type,questionList,duration,created_at,
                interview_id,interview-feedback(userEmail,useName,feedback,created_at)`)
            .eq('userEmail', user?.email)
            .eq('interview_id',interview_id)

            setInterviewDetail(result?.data[0]);
            //setInterviewDetail(result);
        console.log(result);    
    }

    

    return (
        <div className='mt-5'>
           <h2 className='font-bold text-2xl'>Interview Detail</h2>
           <h2></h2>
           <InterviewDetailContainer interviewDetail={interviewDetail}/>
           <CandidateList candidateList={interviewDetail?.['interview-feedback']}/>
        </div>
    )
}

export default InterviewDetail
