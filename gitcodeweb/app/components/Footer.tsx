import React from 'react'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex justify-center items-center  text-[#B5F001]'>
        <div className='lg:w-[1356px] lg:h-[695px] bg-black rounded-lg flex flex-col items-center' >
            <div className='w-[1136px] h-[298px] flex flex-col justify-between mt-14' >
                <div className='flex flex-col ' >
                <span className='text-[160px] text-center font-trap text-[#B5F001]' >We Are-Boost</span>
                <span className='text-[18px] w-[380px] text-start font-thin '>Grow your impact, and be part of a thriving network where every contribution counts.</span>
                <div className='flex '>
                    <input type='text' placeholder=" Your e-mail" className='w-[380px] h-[50px] bg-black text-[#B5F001] text-[18px] font-thin align-middle border-b-2 border-[#B5F001]' /> <Image src='/Arrow1.ico' alt='Arrow icon' width={44} height={2} className='m-4' />
                </div>
                </div>
            <div className='flex flex-row '>
                <Image src='/sms.svg' alt='sms icon' className='w-[50px] h-[50px] m-4' width={44} height={2}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer