import React from 'react'

export default function Header() {
  return (
    <div className='header-bg w-full h-[60px] xlarge:h-[90px]'>
        <div className='w-full h-full py-3.5 px-4 md:py-0.5 md:px-5  flex items-center justify-between'>
            {/*left part of header */}
              <div className=' flex md:items-center'>
                <button className=' w-6 h-6  xlarge:hidden  mr-[26px]'>
                    <svg className=' w-6 h-6 text-left'>
                        <use href='#burger-menu'></use>
                      </svg>
                </button>
                      <div className='hidden  md:inline-block md:w-[142px] md:h-[34.22px]  blg:w-44 blg:h-[42.41px] lg:h-[42.41px]'>
                         <img src="https://app.arootah.com/static/media/coach.c9eadff56c587c99ab7e.png" alt="" />
                      </div>
              </div>
          
            {/* right side of header */}
            <div className=' flex items-center h-[60px] xlarge:h-[90px]'>
                {/* left three icons */}
                <div className=' flex items-center h-[41px] md:h-14 mr-3 xlarge:mr-7'>
                     {/* first one */}
                     <div className='w-[87.69px] h-[41px] xsm:w-[99.74px] xsm:h-[25px] xlarge:w-[147.68px] xlarge:h-10 mr-[21px] xsm:flex xsm:flex-col items-center '>
                        <span className=' inline-block xsm:hidden text-white  text-xxs md:text-xs'>Today's Progress<span className='block'>0/0</span></span>
                        <span className='hidden  xsm:inline-block xsm:w-[99.74px] xsm:text-nowrap text-white text-xxs/4 md:mb-0.5 font-InterMedium xlarge:text-xs xlarge:mb-3  xlarge:w-[119.68px] xlarge:w--4'>Today's Progress 0/0</span>
                        <div className='today-progress w-[87.69px] h-[7px] xsm:w-[99.74px]  xlarge:w-[119.68px] xlarge:h-3 rounded-[20px] '>
                            <span className='progress-percent rounded-full'></span>
                        </div>
                    </div>
                     {/* second one */}
                     <div className='arootah-points w-[43.32px] h-8 xlarge:w-[101.39px] xlarge:h-14 flex xlarge:flex-col  items-center xlarge:items-start  justify-center '>
                        <div className='hidden xlarge:block text-xs mb-1 text-white'>Arootah Points</div>
                        <div className=' flex items-center justify-center xlarge:justify-start md:h-5'>
                            <svg className='w-4 h-4'>
                                <use href='#Arootah-Points'></use>
                            </svg>
                            <span className='inline-block text-sm  ml-1  text-white'>0</span>
                        </div>
                     </div>
                     {/* third one */}
                     <button className='notif w-[28.58px] h-8 xsm:w-8 xsm:h-8 blg:w-[55px] blg:h-[55px] flex items-center justify-center'>
                        <svg className='w-[16px] h-[23px] blg:w-[23px]'>
                            <use href='#notification'></use>
                        </svg>
                     </button>
                 </div>
                 {/* protofile part */}
                 <div className=' flex items-center'>
                    <div className='hidden xlarge:block text-white mr-5'>
                        <div className=' text-sm font-PoppinsMedium '>Welcome!</div>
                        <div className='text-lg text-end font-PoppinsExtraBold'>ali</div>
                    </div>
                    <div className='w-8 h-8 xlarge:w-14 xlarge:h-14 '> 
                        <img className=' rounded-full' src='./images/download.png' alt="" />
                    </div>
                 </div>
                 {/* app toggle btn */}
                 <button className='w-[54.62px] h-[60px] md:w-[60px] md:h-[60px] flex items-center justify-center'>
                    <svg className=' w-6 h-6'>
                        <use href='#app-toggle-btn'></use>
                    </svg>
                 </button>
             </div>
        </div>
    </div>
  )
}
