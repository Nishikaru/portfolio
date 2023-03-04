import React from 'react';

const AboutMe = () => {
  return (
    <div className='px-[13%] mb-20 h-[80vh] flex flex-col items-center md:items-start gap-12'>
      <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold'>
        About Me
      </h1>
      <div className='w-full h-full flex items-center lg:flex-col justify-between lg:justify-evenly gap-6'>
      
        <div className='h-[80%] lg:h-2 w-2 lg:w-[80%] rounded-md bg-[#ffffff] relative'>
          <div className='absolute bg-gradient-to-l from-[#13ADC7] to-[#945DD6] lg:h-2 lg:sliding lg:animate-[sliding_5s_ease-in-out_infinite]'></div>
          <div className='h-5 w-5 rounded-full bg-[#ffffff] absolute translate-x-[-50%] translate-y-[-50%] top-[0%] left-[50%] lg:top-[50%] lg:left-[0%]'></div>
          <div className='h-5 w-5 rounded-full bg-[#ffffff] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] lg:top-[50%] lg:left-[50%]'></div>
          <div className='h-5 w-5 rounded-full bg-[#ffffff] absolute translate-x-[-50%] translate-y-[-50%] top-[100%] left-[50%] lg:top-[50%] lg:left-[100%]'></div>
        </div>
        <div className='flex flex-col lg:flex-row  w-fit lg:w-full h-full lg:h-fit justify-around gap-10 text-justify font-semibold'>
        <h1>2020</h1>
        <h1>2021</h1>
        <h1>2022</h1>
      </div>
        <div className='flex flex-col lg:flex-row h-full lg:h-fit w-fit lg:w-full justify-between gap-10 text-justify '>
          <p className='w-[80%] lg:w-[30%]'> Started learning web development. Also started studying CSE in BUBT. </p>
          <p className='w-[80%] lg:w-[30%]'> Developing skills in javascript. also started web development course in programming hero.  </p>
          <p className='w-[80%] lg:w-[30%]'> learned react.js completed programming hero course learned next.js and typescript and did some real life projects. </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;