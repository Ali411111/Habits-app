import React from 'react'

export default function SideBarMenu() {
  return (
    <div className='sidebar-menu hidden xlarge:block w-[90px] h-full bg-white'>
        <div className=' h-full flex flex-col items-center gap-y-[290px]  py-5'>
           <div className='w-full'>
                  <div className='selected-item w-full flex flex-col items-center'>
                <svg className='w-8 h-8 mt-[7px]'>
                    <use href='#Dashboord'></use>
                </svg>
               <span className=' inline-block mt-1 text-white mb-[13px] font text-xs'>Dashboard</span>
            </div>
            <div className=' w-full flex flex-col items-center my-4'>
                <svg className='w-8 h-8 mt-[7px]'>
                    <use href='#Analytics'></use>
                </svg>
               <span className='menu-name inline-block mt-[3px] mb-[14px] text-xs'>Analytics</span>
            </div>
            <div className=' w-full flex flex-col items-center'>
                <svg className='w-8 h-8 mt-[7px]'>
                    <use href='#Archive'></use>
                </svg>
               <span className='menu-name inline-block mt-[3px] mb-[14px] text-xs'>Archive</span>
            </div>
            <div className=' w-full flex flex-col items-center my-4'>
                <svg className='w-8 h-8 mt-[7px]'>
                    <use href='#Clients'></use>
                </svg>
               <span className='menu-name inline-block mt-[3px] mb-[14px] text-xs'>Clients</span>
            </div>
            <div className=' w-full flex flex-col items-center'>
                <svg className='w-8 h-8 mt-[7px]'>
                    <use href='#Coaching'></use>
                </svg>
               <span className='menu-name inline-block mt-[3px] mb-[14px] text-xs'>Coaching</span>
            </div>
            <div className=' w-full flex flex-col items-center mt-4'>
                <svg className='w-8 h-8 mt-[7px]'>
                    <use href='#profile'></use>
                </svg>
               <span className='menu-name inline-block mt-[3px] mb-[14px] text-xs'>Profile</span>
            </div>
           </div>
            <div>
                <div className='suport-chat-circle w-12 h-12 rounded-full flex items-center justify-center'>
                    <svg className='w-[22.45px] h-[24.77px]'>
                        <use href='#suport-chat'></use>
                    </svg>
                </div>
            </div>
        </div>
      
    </div>
  )
}
