'use client'
import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarOptions } from "@/services/Constants"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar() {

    const path=usePathname();
    console.log(path);

    return (
        <Sidebar>
            <SidebarHeader className='flex items-center -mt-8'>
                <Image src={'/voice.png'} alt="logo" width={200} height={100} className="w-[150px] " />
                <Button className='w-full -mt-5'><Plus /> Cretae New Interview</Button>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarContent>
                        <SidebarMenu>
                            {SidebarOptions.map((option, index) => (
                                <SidebarMenuItem key={index} className='p-1'>
                                    <SidebarMenuButton asChild className={`p-5 ${path == option.path && 'bg-blue-50'}`}>
                                        <Link href={option.path}>
                                            <option.icon  className={` ${path == option. path  && 'text-primary'}`} />
                                            <span className={`text-[16px] font-medium ${path == option. path  && 'text-primary'}`}>{option.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                </SidebarGroup>

            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
