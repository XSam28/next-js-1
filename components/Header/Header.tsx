"use client"
import '@/app/globals.css'
import Link from 'next/link'
import localFont from "next/font/local"
import { RxHamburgerMenu } from 'react-icons/rx';
import DIS from './mini'
import { useState } from 'react';
import { link } from "./data"

const myFont = localFont({
  src : "../../public/Azonix.otf"
})

export default function Header() {
  const [open, setOpen] = useState(false)
  const Open = () => {
    setOpen(!open)
  }
  return (
    <div className='h-[100px] w-full flex justify-between items-center px-5 sm:px-10 text-white bg-gradient-to-b from-black/70'>
    <Link href='/'><h1 className='sm:text-4xl text-3xl tracking-wide'><section  className={myFont.className}>SPACE.BLOG</section></h1></Link>
    <div className='md:hidden'>
    <RxHamburgerMenu size={30} onClick={Open}/>
    </div>
    {open && <DIS clos={setOpen} op={open} />}
    <div className='md:flex gap-10 hidden h-full'>
      {link.map(link=>(
        <Link className='hover:scale-95 flex items-center duration-75 text-[15px] font-bold hover:bg-white hover:text-black h-full rounded-b-full px-5' key={link.id} href={link.url}>{link.title}</Link>
      ))}
    </div>
  </div>
  )
}
