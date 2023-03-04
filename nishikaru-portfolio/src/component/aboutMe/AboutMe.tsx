import React, { useEffect, useRef, useState } from 'react';

const AboutMe = () => {
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
    <div  id='about' className='px-[13%] my-10 h-[80vh] lg:h-[50vh] flex flex-col items-center md:items-start md:justify-center gap-12'>
      <h1  className='text-xl md:text-3xl lg:text-4xl font-semibold'>
        About Me
      </h1>
      <div  className='w-full h-full lg:h-auto flex items-center lg:flex-col justify-between lg:justify-center gap-6'>
      
        <div className='h-[80%] lg:h-2 w-2 lg:w-[80%] rounded-md bg-[#ffffff] relative '>
          <div className='absolute bg-gradient-to-l from-[#13ADC7] to-[#945DD6] lg:h-2 lg:sliding lg:animate-[sliding_5s_ease-in-out_infinite]'></div>
          <div className='h-5 w-5 rounded-full bg-[#945DD6] absolute translate-x-[-50%] translate-y-[-50%] top-[0%] left-[50%] lg:top-[50%] lg:left-[0%]'></div>
          <div className='h-5 w-5 rounded-full bg-[#6978D1] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] lg:top-[50%] lg:left-[50%]'></div>
          <div className='h-5 w-5 rounded-full bg-[#13ADC7] absolute translate-x-[-50%] translate-y-[-50%] top-[100%] left-[50%] lg:top-[50%] lg:left-[100%]'></div>
        </div>
        {/* used ref here */}
        <div ref={targetRef}  className='flex flex-col lg:flex-row  h-[70vh] lg:h-fit w-fit lg:w-full justify-between gap-10 text-center lg:text-justify overflow-y-auto overflow-x-hidden'>
          <div className={`transition-all ease-in-out duration-300 flex flex-col gap-3 lg:gap-6 items-center justify-center w-full ${isVisible?'':' translate-x-[2000px] '}`}>
          <h1 className='text-lg md:text-xl font-medium'>2020</h1>
          <p className='w-[80%] '> Started learning web development. Also started studying CSE in BUBT. </p>
          </div>
          <div className={`transition-all ease-in-out duration-500 flex flex-col gap-3 lg:gap-6 items-center justify-center w-full ${isVisible?'':' translate-x-[2000px] '}`}>
          <h1 className='text-lg md:text-xl font-medium'>2021</h1>
          <p className='w-[80%] '> Developing skills in javascript. also started web development course in programming hero.  </p>
          </div>
          <div className={`transition-all ease-in-out duration-700 flex flex-col gap-3 lg:gap-6 items-center justify-center w-full ${isVisible?'':' translate-x-[2000px] '}`}>
          <h1 className='text-lg md:text-xl font-medium'>2022</h1>
          <p className='w-[80%] '> learned react.js completed programming hero course learned next.js and typescript and did some real life projects. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;