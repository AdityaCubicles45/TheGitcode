import React from 'react';
import Image from 'next/image';

type Props = {};

const PlatformCard: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center justify-center w-[150px] h-[50px] text-[#B5F001]">
      <span className="text-[36px]">{`{`}</span>
      <span className="text-[20px] mx-1 mt-4">{text}</span>
      <span className="text-[36px] ">{`}`}</span>
    </div>
  );
};

const Footer = (props: Props) => {
  return (
    <div className=''>
      <div className="flex justify-between items-center bg-[#B5F001] mb-10 mx-28  h-36 rounded-lg px-20 shadow-md">

      <div className="text-black font-medium">
        <p className="text-[32px]">Stay Updated with</p>
        <p className="text-[30px] font-bold">GitCode-v3!</p>
      </div>
      <div className=''>
      <button className="flex items-center justify-center bg-black text-white text-[18px] font-medium w-[150px] h-[60px] rounded-full">
        Join us
        <div className='bg-[#B5F001] -rotate-45 ml-4 rounded-full'>
          <span className="p-2 text-[24px] text-black">→</span>
        </div>
        
      </button>
      </div>
      </div>

      <div className="flex justify-center items-center text-[#B5F001]">
        <div className="lg:w-[1356px] lg:h-[695px] bg-black rounded-lg flex flex-col items-center">
          <div className="w-[1136px] h-[298px] flex flex-col justify-between mt-14">
            <div className="flex flex-col">
              <span className="text-[160px] text-center font-trap text-[#B5F001]">We Are-Boost</span>
              <span className="text-[18px] w-[380px] text-start font-thin">
                Grow your impact, and be part of a thriving network where every contribution counts.
              </span>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Your e-mail"
                  className="w-[380px] h-[50px] bg-black text-[#B5F001] text-[18px] font-thin align-middle border-b-2 border-[#B5F001] focus:outline-none focus:ring-0"
                />
                <Image src="/Arrow1.ico" alt="Arrow icon" width={44} height={2} className="mt-4 border-b-2 border-[#B5F001] pb-5 " />
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-between gap-6 mt-32">
              <div className="flex flex-row gap-2">
                <Image src="/sms.svg" alt="sms icon" className="w-[75px] h-[75px] " width={44} height={2} />
                <span className='mt-8 text-[22px]'>Get in touch</span>
              </div>
              <div className='flex'>
              <PlatformCard text=" x.com " />
              <PlatformCard text=" Linkedin " />
              </div>
            </div>    
            <div className='mt-6 text-[14px]'>
              <p>© 2024 GitCode - v3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
