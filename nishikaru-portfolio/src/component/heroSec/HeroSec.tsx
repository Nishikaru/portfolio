import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import heroImg from './../../../public/imgs/drawing.png'
// const message = " Crafting Memorable Front-End Experiences";

const HeroSec = () => {
  return (
    <div className='mt-20 px-[13%] py-6 lg:h-[70vh] flex flex-col gap-6 md:gap-0 lg:flex-row items-center text-[#ffffff]'>
      <div className='flex flex-col gap-6 lg:w-[60%] items-center md:items-start'>
        <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold w-[70%] text-center md:text-left'>Crafting Memorable Front-End Experiences</h1>
        <p className='w-[80%] font-medium text-center md:text-left'>
          I design and build visually appealing and intuitive interfaces that deliver seamless user experiences. Explore my portfolio to see examples of my work and lets discuss how I can help bring your digital vision to life.
        </p>
        <div>
          <button className='uppercase font-semibold bg-gradient-to-l from-[#13ADC7] hover:to-[#945DD6] p-4 rounded-md'>hire me</button>
        </div>
      </div>
      <div className='lg:w-[40%] flex flex-row-reverse justify-center md:justify-start wiggle animate-[wiggle_2s_ease-in-out_infinite]'>
        <Image
        className='w-[80%] lg:w-full h-auto'
        src={heroImg}
        alt={''}
        width={800}
        height={800}
        />
        {/* <img className='w-20' src="/nishikaru-portfolio/public/imgs/drawing.png" alt="" /> */}
      </div>
    </div>
  );
};

export default HeroSec;