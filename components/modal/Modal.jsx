"use client"
import Image from "next/image"
import { dataImage } from "./DataImg"
import Link from "next/link"
import { SiNasa } from 'react-icons/si';
import { Montserrat } from 'next/font/google'

const inter = Montserrat({
  subsets: ["latin"],
  weight: ['600']
});

export default function Modal(props) {
  return (
    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

<div className="fixed inset-0 bg-black/50 bg-opacity-75 transition-opacity">
</div>

  <div className="fixed inset-0 overflow-s">
    <div className="absolute inset-0 overflow-s">
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

        <div className="pointer-events-auto relative w-screen sm:max-w-2xl max-w-md">

          <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
            <button onClick={() => props.lick()} type="button" className="relative rounded-md text-gray-300 hover:text-white hover:scale-110 duration-300 focus:text-black">
              <span className="absolute -inset-2.5"></span>
              <span className="sr-only">Close panel</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex h-full overflow-x-hidden flex-col overflow-y-scroll bg-white py-6 shadow-xl">
            <div className="px-4 sm:px-6">
              <h2 className="leading-9 text-black selection:text-white selection:bg-black text-3xl drop-shadow-2xl"><span className="bg-black text-white selection:bg-white selection:text-black">Top</span> Stories</h2>
              <p className="text-xs text-black/30">*hover to see short description</p>
            </div>
            <div className="relative mt-6 flex-1 px-4 sm:px-6">
            {dataImage.map(data=>(
              <div className="relative mb-6 aspect-[4/3] overflow-hidden group rounded-xl" key={data.id}>
                <div className="transition-all duration-500 bg-gradient-to-t from-black absolute bottom-0 z-10 w-full h-full rounded-xl invisible group-hover:visible group-hover:scale-[1.01] translate-y-96 group-hover:translate-y-0"></div>
                <Image className="transition-all duration-500 rounded-xl group-hover:scale-[1.01] shadow-2xl object-cover select-none" src={data.image} alt="Stories" quality={30} fill/>
                <div className="transition-all duration-500 mt-6 absolute bottom-0 z-20 p-10 text-white group-hover:scale-110 delay-200">
                <p className={`${inter.className} drop-shadow-wad text-sm sm:text-xl lg:text-4xl font-extrabold -translate-y-5 md:-translate-y-5 group-hover:translate-y-0 duration-500 group-hover:bg-white group-hover:text-black text-center tracking-tighter leading-tight`}>{data.title}</p>
                <div className="text-xs invisible group-hover:visible translate-y-96 group-hover:translate-y-0 duration-500">
                <p>{data.desc}</p>
                <Link target="_blank" className="hover:underline text-slate-400" href={data.url}>{data.read}</Link>
                </div>
                </div>
              </div>
              ))}
            </div>

              <div className="w-full flex justify-center items-center gap-2 flex-row">
              <p className="font-extralight text-xs tracking-wide text-slate-600 select-none">source:</p>
              <Link href={'https://www.nasa.gov/'}><SiNasa color="black" size="50"/></Link>
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
