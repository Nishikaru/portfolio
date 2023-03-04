import React, { useEffect, useRef, useState } from 'react';

const Tech = () => {
  const data =[
    {
      skill:'js',
      level:'80',
      textLvl:'Advanced'
    },
    {
      skill:'react.js',
      level:'80',
      textLvl:'Advanced'
    },
    {
      skill:'next.js',
      level:'60',
      textLvl:'Intermediate'
    },
    {
      skill:'tailwind',
      level:'80',
      textLvl:'Advanced'
    },
    {
      skill:'typeScript',
      level:'40',
      textLvl:'Beginner'
    },
    
  ]

  // State variable to track the visibility status of the target element
  const [isVisible, setIsVisible] = useState(false);

  // Ref object to attach to the target element
  const targetRef = useRef(null);

  useEffect(() => {
    // Create a new IntersectionObserver instance with a callback function
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set the visibility status based on the intersection ratio
        setIsVisible(entry.isIntersecting);
      },
      // Optional options object for the observer
      { rootMargin: '0px', threshold: 1.0 }
    );

    // Attach the ref to the target element using the observer
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup function to unobserve the target element when unmounting
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  return (
    <div id='tech' className='px-[13%] py-20 mb-10 h-auto flex flex-col items-center md:items-start gap-12'>
      <h1  className='text-xl md:text-3xl lg:text-4xl font-semibold'>
      Technologies
      </h1>
      {data.map((item,index)=>
      // used ref here
      <div ref={targetRef} key={index} className='w-full flex flex-col items-center'>
        <div className='w-full lg:w-[80%] flex justify-between items-center'>
          <h1 className='text-xl font-medium'>{item.skill}</h1>
          <h3>{item.textLvl}</h3>
        </div>
        <div className='h-2 w-full lg:w-[80%] bg-[#ffffff] rounded-md relative'>
          <div style={isVisible?{width:`${item.level}%`}:{width:'0%'}} className={`transition-all ease-in-out duration-[1s] h-full bg-gradient-to-r from-[#13ADC7] to-[#945DD6] rounded-md`}></div>
        </div>
      </div>)}
      <div className='flex flex-col gap-6'>
        <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold'>Additional technologies and skills</h1>
        <ul className='flex flex-wrap gap-12'>
          <li>English</li>
          <li>Teamwork</li>
          <li>Quick learning</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
};

export default Tech;