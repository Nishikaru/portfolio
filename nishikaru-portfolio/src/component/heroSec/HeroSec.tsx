import Image from 'next/image';
import React from 'react';
import heroImg from './../../../public/imgs/drawing.png'

const HeroSec = () => {
  return (
    <div className='mt-20 px-60 py-6 h-[80vh] flex items-center text-[#ffffff]'>
      <div className='flex flex-col gap-6'>
        <h1 className='text-5xl font-medium w-[70%]'>Crafting Memorable Front-End Experiences</h1>
        <p className='w-[80%] font-medium'>
          I design and build visually appealing and intuitive interfaces that deliver seamless user experiences. Explore my portfolio to see examples of my work and let's discuss how I can help bring your digital vision to life.
        </p>
        <div>
          <button className='uppercase font-semibold bg-gradient-to-l  transition-all from-[#13ADC7] hover:to-[#945DD6] p-4 rounded-md'>hire me</button>
        </div>
      </div>
      <div className='w-full'>
        <Image
        className='w-full h-auto'
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