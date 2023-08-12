import { Roboto } from 'next/font/google'
import Button from './button'
const inter = Roboto({
    subsets: ['latin'],
    weight: '900'
   })


export default function PH() {

  return (
    <div className='px-20 p-10 bg-black/80 lg:rounded-r-full selection:bg-white selection:text-black'>
    <h1 className='text-4xl sm:text-6xl text-white font-extrabold drop-shadow-2xl '><section className={inter.className}>Welcome</section></h1>
    <p className='text-white/50 text-justify lg:h-[140px] lg:w-[600px]'>Welcome to <span className='font-extrabold italic'>SPACE.BLOG</span> a captivating and enlightening space blog that takes teaching to new heights by unraveling the mysteries of the cosmos. Our mission is to ignite curiosity, foster learning, and inspire the next generation of space enthusiasts through engaging and informative content that makes the vast universe accessible to learners of all ages.</p>
                                  
    <Button/>
  </div>
  )
}
