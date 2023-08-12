import '@/app/globals.css'
import {Roboto} from 'next/font/google'
import { SiNasa, SiSpacex } from 'react-icons/si';


const inter = Roboto({
  subsets: ['latin'],
  weight: '400'
});

export default function Footer() {
  return (
    <div className='flex justify-between p-2 bg-gradient-to-t from-black'>
      <div className='py-3 flex items-center'>
    <h6 className='text-white tracking-tighter text-sm'><p className={inter.className}>sAm © 2023</p></h6>
  </div>
  <div><SiSpacex color="#ffff" size="60" /></div>
      <div><SiNasa color="#ffff" size="60"/></div>
  </div>
  )
}
