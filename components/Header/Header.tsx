"use client"
import '@/app/globals.css'
import Link from 'next/link'
import localFont from "next/font/local"
import { RxHamburgerMenu } from 'react-icons/rx';
import DIS from './mini'
import { useState } from 'react';
import {IoMdSearch} from 'react-icons/io'
import { link } from './data';
import { usePathname } from 'next/navigation';

const myFont = localFont({
  src : "../../public/Azonix.otf"
})

export default function Header() {
  const [open, setOpen] = useState(false)
  const Open = () => {
    setOpen(!open)
  }

  const [search, setSearch] = useState(false)
  const openSearch = () => {
    setSearch(!search)
  }

  const pathname = usePathname()

  
  return (
    
    <>
    <div
      className='h-[80px] w-full flex justify-between items-center px-5 sm:px-10 text-white bg-gradient-to-b from-black/70'>
    <Link href='/'><h1 className='sm:text-4xl text-2xl tracking-wide'><section  className={myFont.className}>SPACE.BLOG</section></h1></Link>
    <div className='flex items-center'>
    <div className='lg:flex md:gap-1 hidden h-full items-center space-x-4'>
    <Link href={'/search'}>
    <IoMdSearch/>
    </Link>
      {link.map(({url, id, title}) => (
        <Link key={id} href={url} 
        className={` ${pathname === url ? "bg-white text-black" : ""} active:scale-95 flex items-center duration-75 text-[15px] hover:bg-zinc-300 hover:text-black font-bold h-full rounded-full px-5`}
        >{title}</Link>
      ))}
    </div>
    <div className='lg:hidden flex items-center space-x-5'>
      <Link href={'/search'}>
    <IoMdSearch/>
      </Link>
    <RxHamburgerMenu size={30} onClick={Open}/>
    </div>
    {open && <DIS clos={setOpen} op={open} />}
    </div>
  </div>
  </>

  )
}
