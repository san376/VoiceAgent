import { BrainIcon, BriefcaseBusinessIcon, Calendar, ClipboardListIcon, CloudIcon, Code2Icon, CrownIcon, DatabaseIcon, LayoutDashboard, List, MessageSquareIcon, NetworkIcon, PuzzleIcon, ServerIcon, Settings, ShieldCheckIcon, SigmaIcon, TerminalIcon, User2Icon, WalletCards } from "lucide-react";

export const SidebarOptions = [
    {
        name: 'Dashboard',
        icon: LayoutDashboard,
        path: '/dashboard'
    },
    {
        name: 'Scheduled Interview',
        icon: Calendar,
        path: '/scheduled-interview'
    },
    {
        name: 'All Interview',
        icon: List,
        path: '/all-interview'
    },
    {
        name: 'Billing',
        icon: WalletCards,
        path: '/billing'
    },
    {
        name: 'Settings',
        icon: Settings,
        path: '/settings'
    }
]

export const InterviewType = [
    {
        title: 'Technical',
        icon: Code2Icon
    },
    {
        title: 'Behavioral',
        icon: User2Icon
    },
    {
        title: 'Experience',
        icon: BriefcaseBusinessIcon
    },
    {
        title: 'Problem Solving',
        icon: PuzzleIcon
    },
    {
        title: 'System Design',
        icon: NetworkIcon
    },
    {
        title: 'Leadership',
        icon: CrownIcon
    },
    {
        title: 'Communication',
        icon: MessageSquareIcon
    },
    {
        title: 'Project Management',
        icon: ClipboardListIcon
    },
    {
        title: 'Coding Challenges',
        icon: TerminalIcon
    },
    {
        title: 'Algorithms',
        icon: SigmaIcon
    },
    {
        title: 'Databases',
        icon: DatabaseIcon
    },
    {
        title: 'DevOps',
        icon: ServerIcon
    },
    {
        title: 'Security',
        icon: ShieldCheckIcon
    },
    {
        title: 'AI/ML',
        icon: BrainIcon
    },
    {
        title: 'Cloud',
        icon: CloudIcon
    }

]


export const  QUESTIONS_PROMPT = `You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality interview questions:
Job Title: {{jobTitle}}
Job Description: {{jobDescription}}
Interview Duration: {{duration}}
Interview Type: {{type}}

📝 Your task:
Analyze the job description to identify key responsibilities, required skills, and expected experience.
Generate a list of interview questions depends on interview duration
Adjust the number and depth of questions to match the interview duration.
Ensure the questions match the tone and structure of a real-life {{type}} interview.

🧾 Format your response in JSON format with array list of questions.
format: interviewQuestions=[
{
  question:"",
  type:'Technical/Behavioral/Experience/Problem Solving/Leasership'
},{
...
}]
The Goal is to create a structured, relevant, and time-opr=timised interview plan for a {{job Title}} role.`
