"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'


const dataImage = [
  {
    id: 1,
    image: '/astro.jpg'
  },
  {
    id: 2,
    image: '/a_blue_farewell.jpg'
  },
  {
    id: 3,
    image: '/nscompany.jpg'
  },
  {
    id: 4,
    image: '/youngfly.jpg'
  },
  {
    id: 5,
    image: '/Crew-4_Members_Pose_for_Pre-Return_Photo.jpg'
  },
  {
    id: 6,
    image: '/Astronaut_Kjell_Lindgren.jpeg'
  },
  {
    id: 7,
    image: '/Astronaut_Nicole_Mann_Trains_in_T-38.jpg'
  },
  {
    id: 8,
    image: '/Michael_E._López-Alegría_Poses_During_Spacewalk.jpg'
  },
  {
    id: 9,
    image: '/Webb_Reveals_New_Details_in_Pillars _of_Creation.png'
  },
  {
    id: 10,
    image: '/Practicing_Our_Moonwalk.jpg'
  },
  {
    id: 11,
    image: '/Endeavour_Gets_a_Piggyback_Ride.jpg'
  },
  {
    id: 12,
    image: '/Jupiter_in_Ganymedes_Shadow.jpg'
  }
]

export default function PageHome() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // useEffect(()=>{
  //   const interval = setInterval(()=>
  //   setCurrentSlide((prev)=>(prev === dataImage.length - 1 ? 0 : prev+1)),
    
  //   );
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className='absolute bg-cover -z-10 top-0'>
        <Image
        className='object-cover w-[100vw] h-[100vh]'
        src={dataImage[currentSlide].image}
        alt='Slide'
        width={3000}
        height={800}
        />
    </div>
  )
}
