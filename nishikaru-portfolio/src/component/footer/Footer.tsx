import Link from 'next/link';
import React from 'react';
import {AiFillGithub,AiOutlineTwitter,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-[#0F1624] px-52 py-6 flex w-full items-center justify-between'>
      <div>
        <h1 className='text-3xl'>Contacts</h1>
        <p><span>Number: </span> <span>+8801710073692</span></p>
        <p><span>Email: </span> <span>mdsajed001@gmail.com</span></p>
      </div>
      <div className='text-3xl flex gap-6'>
      <Link href={'#'}><span><AiFillGithub/></span></Link>
			<Link href={'#'}><span><AiFillLinkedin/></span></Link>
			<Link href={'#'}><span><AiOutlineTwitter/></span></Link>
      </div>
    </div>
  );
};

export default Footer;