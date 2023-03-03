import Link from 'next/link';
import React from 'react';
import {AiFillGithub,AiOutlineTwitter,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-[#0F1624] px-[10%] py-6 flex flex-col lg:flex-row gap-6 w-full items-center justify-between'>
      <div className='flex flex-col gap-3 items-center lg:items-start'>
        <h1 className='text-3xl'>Contacts</h1>
        <p><span>Number: </span> <span>+8801710073692</span></p>
        <p><span>Email: </span> <span>mdsajed001@gmail.com</span></p>
      </div>
      <div className='text-5xl flex gap-6'>
        <Link href={'https://github.com/Nishikaru'}><span><AiFillGithub/></span></Link>
			  <Link href={'https://www.linkedin.com/in/nishikaru-sajed/'}><span><AiFillLinkedin/></span></Link>
			  <Link href={'https://twitter.com/mdsajed001'}><span><AiOutlineTwitter/></span></Link>
      </div>
    </div>
  );
};

export default Footer;