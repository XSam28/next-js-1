import { Roboto } from 'next/font/google'
import Button from './button'
const inter = Roboto({
    subsets: ['latin'],
    weight: '900'
   })


export default function PH() {

  return (
    <div className='px-20 p-10 bg-black/80 lg:rounded-r-full'>
    <h1 className='text-4xl sm:text-6xl text-white font-extrabold drop-shadow-2xl'><section className={inter.className}>Welcome</section></h1>
    <p className='text-white/50 text-justify lg:h-[140px] lg:w-[700px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                  Sint, nisi atque provident vero pariatur soluta optio,
                                  doloribus molestiae minus rerum eaque sapiente facere maiores! 
                                  Culpa eius ex tempore praesentium voluptas minima aperiam non enim recusandae 
                                  consectetur ea itaque fuga numquam, doloribus quibusdam illum at corporis voluptates asperiores laborum. Harum, inventore.</p>
                                  
    <Button/>
  </div>
  )
}
