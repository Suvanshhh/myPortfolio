import React from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'

const Page1 = () => {
    const mouseMoving = (e) => {
        console.log(e)
    }
    // useGSAP(function(){

    // })
  return (
    <div onMouseMove={(e)=>{
        mouseMoving(e)
    }} className='h-screen p-3 pb-10 bg-white'>
        <div className=' shadow-lg p-12  shadow-gray-700 h-full bg-cover w-full rounded-[30px] bg-[url(https://i.postimg.cc/PxBbZv7L/ANZO.jpg)]'>
          <img className=' pl-5 h-16 ' src='https://i.postimg.cc/yYnwK1Jq/Frame-53.png'/>
          <TiltText/>
          <Page1Bottom/>
        </div>
        </div>
  )
}

export default Page1