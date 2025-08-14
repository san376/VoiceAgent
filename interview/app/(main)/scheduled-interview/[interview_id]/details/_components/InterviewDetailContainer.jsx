// import { Calendar, Clock } from 'lucide-react'
// import moment from 'moment'
// import React from 'react'

// function InterviewDetailContainer({ interviewDetail }) {
//   return (
//     <div className='p-5 bg-white rounded-lg mt-5'>

//       <h2>Fullstack{interviewDetail?.jobPosition}</h2>
//       <div className='mt-5 flex items-center justify-between lg:pr-52'>
//         <div>
//           <h2 className='text-xs text-gray-500'>Duration</h2>
//           <h2 className='flex text-sm font-bold items-center gap-2'><Clock className='h-4 w-4' />5 Min{interviewDetail?.duration}</h2>
//         </div>
//         <div>
//           <h2 className='text-xs text-gray-500'>Created On</h2>
//           <h2 className='flex text-sm font-bold items-center gap-2'><Calendar className='h-4 w-4' />{moment(interviewDetail?.created_at).format('MMM DD, YYYY')}</h2>
//         </div>
//         <div>
//           <h2 className='text-xs text-gray-500'>Type</h2>
//           {/* <h2 className='flex text-sm font-bold items-center gap-2'><Clock className='h-4 w-4'/>Technical{JSON.parse(interviewDetail?.type)[0]}</h2> */}
//           <h2 className='flex text-sm font-bold items-center gap-2'><Clock className='h-4 w-4' />Technical{interviewDetail?.type[0]}</h2>
//         </div>

//       </div>
//       <div className='mt-5'>
//         <h2 className='font-bold'>Job Description</h2>
//         <p className='text-sm'>Design, develop, and maintain scalable web applications using both frontend and backend technologies, including React.js, Node.js, and databases like MongoDB or PostgreSQL.

//           Collaborate with cross-functional teams to deliver end-to-end solutions, ensuring seamless integration of UI/UX, server-side logic, APIs, and cloud deployment.{interviewDetail?.jobDescription}</p>
//       </div>
//       <div>
//         <h2 className='font-bold mt-2'>Interview Questions</h2>
//         <div className='grid grid-cols-2 gap-5'>
//           {interviewDetail?.questionList.map((item, index) => (
//             <h2 className='text-xs'>{index+1}.{item?.question}</h2>
//           ))}
//         </div>
//          <div className='text-sm '>
//             <p>1. Can you describe a full stack project you’ve built recently?</p>
//           <p>2. What are the biggest challenges in full stack development?</p>
//           <p>3. How do you ensure smooth communication between frontend and backend?</p>
//           <p>4. What are React hooks, and how do you use useEffect?</p>
//           <p>5. How do you manage state in large React applications?</p>
//           <p>6. Explain the difference between controlled and uncontrolled components.</p>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default InterviewDetailContainer


import { Calendar, Clock } from 'lucide-react'
import moment from 'moment'
import React from 'react'

function InterviewDetailContainer({ interviewDetail }) {
  return (
    <div className='p-5 bg-white rounded-lg mt-5'>

      <h2>Fullstack{interviewDetail?.jobPosition}</h2>
      <div className='mt-5 flex items-center justify-between lg:pr-52'>
        <div>
          <h2 className='text-xs text-gray-500'>Duration</h2>
          <h2 className='flex text-sm font-bold items-center gap-2'><Clock className='h-4 w-4' />{interviewDetail?.duration}</h2>
        </div>
        <div>
          <h2 className='text-xs text-gray-500'>Created On</h2>
          <h2 className='flex text-sm font-bold items-center gap-2'><Calendar className='h-4 w-4' />{moment(interviewDetail?.created_at).format('MMM DD, YYYY')}</h2>
        </div>
        <div>
          <h2 className='text-xs text-gray-500'>Type</h2>
          {/* <h2 className='flex text-sm font-bold items-center gap-2'><Clock className='h-4 w-4'/>Technical{JSON.parse(interviewDetail?.type)[0]}</h2> */}
          <h2 className='flex text-sm font-bold items-center gap-2'><Clock className='h-4 w-4' />{interviewDetail?.type[0]}</h2>
        </div>

      </div>
      <div className='mt-5'>
        <h2 className='font-bold'>Job Description</h2>
        <p className='text-sm'>{interviewDetail?.jobDescription}</p>
      </div>
      <div>
        <h2 className='font-bold mt-2'>Interview Questions</h2>
        <div className='grid grid-cols-2 gap-5'>
          {interviewDetail?.questionList.map((item, index) => (
            <h2 key={index} className='text-xs'>{index+1}.{item?.question}</h2>
          ))}
         
        </div>
      </div>
    </div>
  )
}

export default InterviewDetailContainer
