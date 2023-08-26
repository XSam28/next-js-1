import { Montserrat } from 'next/font/google'
import Button from './button'
const inter = Montserrat({
    subsets: ['latin'],
    weight: ['900']
   })
   const mon = Montserrat({
    subsets: ['latin'],
    weight: ['300']
   })


export default function PH() {

  return (
    <div className='h-[80vh] flex items-center w-full'>
    <div className='px-20 p-10 bg-black/80 lg:rounded-r-full selection:bg-white selection:text-black flex flex-col'>
    <h1 className='text-4xl sm:text-6xl text-white font-extrabold drop-shadow-2xl '><section className={inter.className}>Hi<span className='animate-pulse'>.</span></section></h1>
    <p className={`${mon.className} text-white text-justify lg:h-[140px] text-sm sm:text-base lg:w-[600px]`}>Welcome to <span className='font-extrabold italic'>SPACE.BLOG</span> a captivating and enlightening space blog that takes teaching to new heights by unraveling the mysteries of the cosmos. Our mission is to ignite curiosity, foster learning, and inspire the next generation of space enthusiasts through engaging and informative content that makes the vast universe accessible to learners of all ages.</p>            
    <Button/>
  </div>
  </div>
  )
}
