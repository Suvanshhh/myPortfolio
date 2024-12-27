import React from 'react'

const Page1Bottom = () => {
  return (
    <div className='absolute left-0 p-4  md:p-12 md:pl-20 mb-0 flex flex-col md:flex-row items-center md:items-end justify-between bottom-0 w-full gap-6 md:gap-0' >
        <div className='text-center md:text-left'>
            <h2 className='text-sm md:text-l leading-[12px] font-[font3]'>MERN DEVELOPER |</h2>
            <h3 className='text-sm mb-5 md:text-l font-[font4] text-gray-400'>FULL STACK</h3>
        </div>
        <div className='flex flex-col items-center'>
            <img className="h-12 md:h-16 mb-3 mr-3 md:mb-5" src="https://i.postimg.cc/VvyCkFXH/cssda-wotd-white.png" alt="" />
            <img className="h-12 md:h-16 mb-3 mr-3" src="https://i.postimg.cc/L6bxBckc/EN-legend-large.png" alt="" />
        </div>
    </div>
  )
}

export default Page1Bottom