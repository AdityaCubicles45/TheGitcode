import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex justify-center items-center  text-[#B5F001]'>
        <div className='lg:w-[1356px] lg:h-[695px] bg-black rounded-lg flex flex-col items-center' >
            <div className='w-[1136px] h-[298px] flex flex-col  mt-14' >
            <span className='text-[160px] text-center font-trap text-[#B5F001]' >We Are-Boost</span>
            <span className='text-[18px] w-[380px] text-start font-thin '>Grow your impact, and be part of a thriving network where every contribution counts.</span>
            <div className='text-[#B5F001]'>
                <input type='text' placeholder=" your e-mail" className='w-[380px] h-[50px] rounded-lg bg-black text-[#B5F001] text-[18px] font-thin mt-8' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer