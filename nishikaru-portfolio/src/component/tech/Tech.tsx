import React from 'react';

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
  return (
    <div id='tech' className='px-[13%] mb-10 h-[50vh] flex flex-col items-center md:items-start gap-12'>
      <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold'>
      Technologies
      </h1>
      {data.map((item,index)=>
      <div key={index} className='w-full flex flex-col items-center'>
        <div className='w-full lg:w-[80%] flex justify-between items-center'>
          <h1 className='text-xl font-medium'>{item.skill}</h1>
          <h3>{item.textLvl}</h3>
        </div>
        <div className='h-2 w-full lg:w-[80%] bg-[#ffffff] rounded-md relative'>
          <div className={`h-full w-[${item.level}%] bg-gradient-to-r from-[#13ADC7] to-[#945DD6] rounded-md`}></div>
        </div>
      </div>)}
    </div>
  );
};

export default Tech;