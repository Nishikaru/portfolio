import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeroSec from '@/src/component/heroSec/HeroSec'
import NavBar from '@/src/component/navBar/NavBar'
import Projects from '@/src/component/projects/Projects'
import Footer from '@/src/component/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-[#0F1624] to-[#0F2233] text-[#ffffff]'>
    <NavBar/>
      <HeroSec/>
      <Projects/>
    <Footer/>
    </div>
  )
}
