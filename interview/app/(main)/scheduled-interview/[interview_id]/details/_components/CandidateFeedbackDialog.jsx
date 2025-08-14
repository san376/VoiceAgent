// import React from 'react'
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
// import { Button } from '@/components/ui/button'
// import { Progress } from '@/components/ui/progress'
// function CandidateFeedbackDialog({ candidate }) {
//     const feedback = candidate?.feedback?.feedback
//     return (
//         <div>
//             <Dialog>
//                 <DialogTrigger asChild>
//                     <Button variant={outline} className='text-primary'>View Report</Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                     <DialogHeader>
//                         <DialogTitle>Feedback</DialogTitle>
//                         <DialogDescription>
//                             <div className='mt-5'>
//                                 <div className='flexx justify-between items-center'>
//                                     <div className='flex items-center gap-5'>
//                                         <h2 className='bg-primary p-3 px-5 font-bold text-white rounded-full'>{candidate.userName[0]}</h2>
//                                         <div>
//                                             <h2 className='font-bold text-2xl'>{candidate?.userName}</h2>
//                                             <h2 className='text-gray-500 text-sm'>{candidate?.userEmail}</h2>
//                                         </div>
//                                     </div>
//                                     <div className='flex gap-3 items-center'>
//                                         <h2 className='text-green-500 text-2xl font-bold'>7.5/10</h2>
//                                     </div>
//                                 </div>
//                                 <div className='mt-5'>
//                                     <h2 className='font-bold'>Skills Assesment</h2>
//                                     <div className='mt-3 grid grid-cols-2 gap-10'>
//                                         <div>
//                                             <h2 className='flex justify-between'>Technical Skills <span>{feedback?.rating?.technicalSkills}/10</span></h2>
//                                             <Progress value={feedback?.rating?.technicalSkills * 10} className='mt-1' />
//                                         </div>
//                                         <div>
//                                             <h2 className='flex justify-between'>Communication <span>{feedback?.rating?.communication}/10</span></h2>
//                                             <Progress value={feedback?.rating?.communication * 10} className='mt-1' />
//                                         </div>
//                                         <div>
//                                             <h2 className='flex justify-between'>Problem Solving <span>{feedback?.rating?.problemsolving}/10</span></h2>
//                                             <Progress value={feedback?.rating?.problemsolving * 10} className='mt-1' />
//                                         </div>
//                                         <div>
//                                             <h2 className='flex justify-between'>Experience <span>{feedback?.rating?.experience}/10</span></h2>
//                                             <Progress value={feedback?.rating?.experience * 10} className='mt-1' />
//                                         </div>
//                                     </div>
//                                 </div>


//                                 <div className='mt-5'>
//                                     <h2 className='font-bold'>Performance Summary</h2>
//                                     <div className='p-5 bg-secondary my-3 rounded-md'>
//                                         {feedback?.summary?.map((summary, index) => (
//                                             <p key={index}>{summary} </p>
//                                         ))}
//                                     </div>
//                                 </div>


//                                 <div className={`p-5 mt-10 flex items-center justify-between rounded-md ${feedback?.Recommendation=='NO'?'bg-red-100':'bg-green-100'} `}>
//                                     <div>
//                                         <h2 className={` font-bold${feedback?.Recommendation=='NO'?'text-red-700':'text-green-700'} `}>Recommendation Msg:</h2>
//                                     <p className={`${feedback?.Recommendation=='NO'?'text-red-500':'text-green-500'} `}>{feedback?.RecommendationMsg}</p>
//                                     </div>
//                                     <Button className={`${feedback?.Recommendation=='NO'?'text-red-700':'text-green-700'} `}>Send Msg</Button>
//                                 </div>
//                             </div>
//                         </DialogDescription>
//                     </DialogHeader>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     )
// }

// export default CandidateFeedbackDialog


// import React from 'react'
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
// import { Button } from '@/components/ui/button'
// import { Progress } from '@/components/ui/progress'
// function CandidateFeedbackDialog({ candidate }) {
//     const feedback = candidate?.feedback?.feedback

//     const tot=(feedback?.rating?.technicalSkills)+(feedback?.rating?.communication)+(feedback?.rating?.problemSolving)+(feedback?.rating?.experience);
//     const avg=tot/4;
//     return (
//         <div>
//             <Dialog>
//                 <DialogTrigger asChild>
//                     {/* <Button variant={outline} className='text-primary'>View Report</Button> */}
//                     <Button variant="outline" className="text-primary">View Report</Button>

//                 </DialogTrigger>
//                 <DialogContent>
//                     <DialogHeader>
//                         <DialogTitle>Feedback</DialogTitle>
//                         <DialogDescription asChild>
//                             <div className='mt-5'>
//                                 <div className='flex justify-between items-center'>
//                                     <div className='flex items-center gap-5'>
//                                         <h2 className='bg-primary p-3 px-5 font-bold text-white rounded-full'>{candidate.userName[0]}</h2>
//                                         <div>
//                                             <h2 className='font-bold text-2xl'>{candidate?.userName}</h2>
//                                             <h2 className='text-gray-500 text-sm'>{candidate?.userEmail}</h2>
//                                         </div>
//                                     </div>
//                                     <div className='flex gap-3 items-center'>
//                                         <h2 className='text-green-500 text-2xl font-bold'>{avg}/10</h2>
//                                     </div>
//                                 </div>
//                                 <div className='mt-5'>
//                                     <h2 className='font-bold'>Skills Assesment</h2>
//                                     <div className='mt-3 grid grid-cols-2 gap-10'>
//                                         <div>
//                                             <h2 className='flex justify-between'>Technical Skills <span>{feedback?.rating?.technicalSkills}/10</span></h2>
//                                             <Progress value={feedback?.rating?.technicalSkills * 10} className='mt-1' />
//                                         </div>
//                                         <div>
//                                             <h2 className='flex justify-between'>Communication <span>{feedback?.rating?.communication}/10</span></h2>
//                                             <Progress value={feedback?.rating?.communication * 10} className='mt-1' />
//                                         </div>
//                                         <div>
//                                             <h2 className='flex justify-between'>Problem Solving <span>{feedback?.rating?.problemSolving}/10</span></h2>
//                                             <Progress value={feedback?.rating?.problemSolving * 10} className='mt-1' />
//                                         </div>
//                                         <div>
//                                             <h2 className='flex justify-between'>Experience <span>{feedback?.rating?.experience}/10</span></h2>
//                                             <Progress value={feedback?.rating?.experience * 10} className='mt-1' />
//                                         </div>
//                                     </div>
//                                 </div>


//                                 <div className='mt-5'>
//                                     <h2 className='font-bold'>Performance Summery</h2>
//                                     <div className='p-5 bg-secondary my-3 rounded-md'>
//                                         {/* {feedback?.summery?.map((summery, index) => (
//                                             <p key={index}>{summery} </p>
//                                         ))} */}
//                                         {feedback?.summery}
//                                     </div>
//                                 </div>



//                                 <div className={`p-5 mt-10 flex items-center justify-between rounded-md ${feedback?.recommendation?.trim().toUpperCase() === 'NO' ? 'bg-red-100' : 'bg-green-100'} `}>
//                                     <div>
//                                         <h2 className={`font-bold ${feedback?.recommendation?.trim().toUpperCase() === 'NO' ? 'text-red-700' : 'text-green-700'} `}>Recommendation:  {feedback?.recommendation}</h2>
//                                         <p className={`${feedback?.recommendation?.trim().toUpperCase() === 'NO' ? 'text-red-500' : 'text-green-500'} `}>{feedback?.recommendationMsg}</p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </DialogDescription>
//                     </DialogHeader>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     )
// }

// export default CandidateFeedbackDialog






function CandidateFeedbackDialog({ candidate }) {
  const feedback = candidate?.feedback?.feedback;

  // Extract ratings safely
  const ratings = [
    feedback?.rating?.technicalSkills,
    feedback?.rating?.communication,
    feedback?.rating?.problemSolving,
    feedback?.rating?.experience,
  ].filter((v) => typeof v === "number"); // Only keep numbers

  // Calculate average safely
  const avg = ratings.length > 0
    ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
    : "N/A";

  // Normalize recommendation
  const rec = (feedback?.recommendation || "").trim().toUpperCase();
  const isNo = rec === "NO";
  const recBg = isNo ? "bg-red-100" : rec ? "bg-green-100" : "bg-gray-100";
  const recText = isNo ? "text-red-700" : rec ? "text-green-700" : "text-gray-700";
  const recMsgText = isNo ? "text-red-500" : rec ? "text-green-500" : "text-gray-500";

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="text-primary">View Report</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Feedback</DialogTitle>
            <DialogDescription asChild>
              <div className="mt-5">
                {/* Candidate Header */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <h2 className="bg-primary p-3 px-5 font-bold text-white rounded-full">
                      {candidate?.userName?.[0] || "?"}
                    </h2>
                    <div>
                      <h2 className="font-bold text-2xl">{candidate?.userName || "Unknown"}</h2>
                      <h2 className="text-gray-500 text-sm">{candidate?.userEmail || "No email"}</h2>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <h2 className="text-green-500 text-2xl font-bold">{avg}/10</h2>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-5">
                  <h2 className="font-bold">Skills Assessment</h2>
                  <div className="mt-3 grid grid-cols-2 gap-10">
                    {[
                      { label: "Technical Skills", value: feedback?.rating?.technicalSkills },
                      { label: "Communication", value: feedback?.rating?.communication },
                      { label: "Problem Solving", value: feedback?.rating?.problemSolving },
                      { label: "Experience", value: feedback?.rating?.experience },
                    ].map((skill, i) => (
                      <div key={i}>
                        <h2 className="flex justify-between">
                          {skill.label} <span>{skill.value ?? "N/A"}/10</span>
                        </h2>
                        <Progress value={(skill.value ?? 0) * 10} className="mt-1" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-5">
                  <h2 className="font-bold">Performance Summary</h2>
                  <div className="p-5 bg-secondary my-3 rounded-md">
                    {Array.isArray(feedback?.summary)
                      ? feedback.summary.map((s, idx) => <p key={idx}>{s}</p>)
                      : feedback?.summary || "No summary provided"}
                  </div>
                </div>

                {/* Recommendation */}
                <div className={`p-5 mt-10 flex items-center justify-between rounded-md ${recBg}`}>
                  <div>
                    <h2 className={`font-bold ${recText}`}>
                      Recommendation: {feedback?.recommendation || "N/A"}
                    </h2>
                    <p className={recMsgText}>{feedback?.recommendationMsg || "No message provided"}</p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
