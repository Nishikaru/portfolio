import Link from 'next/link';
import React, { useState } from 'react';
import {AiFillGithub,AiOutlineTwitter,AiFillLinkedin,AiOutlineMenu} from 'react-icons/ai'
import NavLinks from './NavLinks';

const NavBar = () => {
		const [toggler,setToggler] = useState<boolean>(false)
  return (
    <nav className='z-50 w-screen flex justify-between items-center px-[10%] py-6 md:py-3 bg-[#0F1624] text-[#ffffff] fixed top-0 left-0'>
    	<div>
				<h1 className='uppercase font-bold text-2xl'>sajed</h1>
    	</div>
			<div>
				<NavLinks toggler={toggler} setToggler={setToggler}/>
			</div>
			<div className='hidden lg:flex gap-3 text-xl'>
			<Link href={'https://github.com/Nishikaru'} ><span><AiFillGithub/></span></Link>
			<Link href={'https://www.linkedin.com/in/nishikaru-sajed/'}><span><AiFillLinkedin/></span></Link>
			<Link href={'https://twitter.com/mdsajed001'}><span><AiOutlineTwitter/></span></Link>
			</div>
			<div className='md:hidden text-xl font-bold'>
				<span onClick={()=>setToggler(!toggler)}>
					<AiOutlineMenu/>
				</span>
			</div>
    </nav>
  );
};

export default NavBar;