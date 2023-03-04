import Link from 'next/link';
import React, { FC } from 'react';
import {GiCrossedBones} from 'react-icons/gi'

type NavLinksProps ={
  toggler:boolean;
  setToggler:Function;
}

const NavLinks: FC<NavLinksProps> = ({toggler,setToggler}) => {
  const toggleHandler =()=>{
    setToggler(!toggler)
  }
  return (
    <div className={`absolute top-0 transition-all ${toggler?'right-0':'right-[-400px]'} h-screen md:h-auto w-[50vw] md:w-auto md:static p-6 flex flex-col md:flex-row gap-14 bg-[#0F2233] md:bg-transparent shadow-md md:shadow-none`}>
      <span className='md:hidden w-full flex flex-row-reverse text-xl font-bold px-[10%]' onClick={toggleHandler}>
        <GiCrossedBones/>
      </span>
				<div className='flex flex-col md:flex-row gap-12'>
        <Link onClick={toggleHandler} href={'#projects'}>Projects</Link>
				<Link onClick={toggleHandler} href={'#tech'}>Technologies</Link>
				<Link onClick={toggleHandler} href={'#about'}>About me</Link>
        </div>
        {/* <div className='md:hidden'></div> */}
			</div>
  );
};

export default NavLinks;