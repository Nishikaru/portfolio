import Link from 'next/link';
import React from 'react';
import {AiFillGithub,AiOutlineTwitter,AiFillLinkedin} from 'react-icons/ai'

const NavBar = () => {
  return (
    <nav className='w-screen flex justify-between items-center px-52 py-6 bg-[#0F1624] text-[#ffffff] fixed top-0 left-0'>
    	<div>
				<h1 className='uppercase font-bold text-2xl'>sajed</h1>
    	</div>
			<div className='flex gap-12'>
				<Link href={'#projects'}>Projects</Link>
				<Link href={'#'}>Technologies</Link>
				<Link href={'#'}>About me</Link>
			</div>
			<div className='flex gap-3 text-xl'>
			<Link href={'#'}><span><AiFillGithub/></span></Link>
			<Link href={'#'}><span><AiFillLinkedin/></span></Link>
			<Link href={'#'}><span><AiOutlineTwitter/></span></Link>
			</div>
    </nav>
  );
};

export default NavBar;