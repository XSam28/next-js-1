import Image from "next/image"
import Pro from "@/public/nscompany.jpg"
import Yung from "@/public/youngfly.jpg"
import { Readex_Pro, Roboto } from 'next/font/google'
import Link from "next/link";
import dataSpace from "@/app/libs/getSpace"
import { Suspense } from "react";

const inter = Roboto({
  subsets: ["latin"],
  weight: '500'
});
const ligth = Readex_Pro({
  subsets: ["latin"],
  weight: '500'
});

export default async function Products() {
const data = await dataSpace()
  return (
    <div className='w-full h-[1000vh] bg-white select-none'>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-8 gap-3">

      {/* <div className="relative group">
      <div className="rounded-xl group-hover:scale-[1.01] duration-500 shadow-2xl relative">
      <Image className="aspect-[2/2] object-cover rounded-xl" src={Pro} alt="HAHA" placeholder="blur"/>
      <div className="bg-[#39719e]/50 group-hover:bg-[#39719e] duration-500 absolute bottom-0 rounded-b-xl w-full">
      <p className="p-5 text-white"><Link target="_blank" href={"https://www.nasa.gov/audience/forstudents/5-8/features/symbols-of-nasa.html"}>Symbols of NASA</Link></p>
      </div>
      </div>
      </div>
        <div className="selection:text-white bg-[#39719e] relative aspect-[2/2] overflow-hidden p-10 rounded-2xl shadow-2xl">
          <h1 className={inter.className}><section className="text-8xl xl:text-7xl font-extrabold tracking-tighter text-white border-b-4 border-white">NASA EVENTS</section></h1>
          <p id={ligth.className} className="text-justify font-thin text-xs sm:text-sm text-white mt-5">
            Mon., Aug. 7, 2 p.m. EDT: Media teleconference with NASA and Boeing on the first astronaut flight of the CST-100 Starliner
            Tue., Aug. 8, 2 p.m. EDT: News conference on Artemis II mission preparations and crew training updates
            Wed., Aug. 9, 10:15 a.m. EDT: Coverage of Russian spacewalk at the ISS
            Tue., Aug. 22, 8:45 p.m. EDT: Launch coverage of the ISS Progress 85 cargo craft to the ISS
            Thu., Aug.24, 11 p.m. EDT: Coverage of the rendezvous and docking of the ISS Progress 85 cargo craft to the ISS</p>
          <p id={ligth.className} className="text-justify font-thin text-sm text-white bottom-0 absolute pb-5 border-t-4">
          <Link href="https://www.nasa.gov/multimedia/nasatv/index.html#public" target="_blank">NASA TV Schedule</Link>
          </p>
          </div>

      <div className="relative group md:col-span-2">
      <div className="rounded-xl group-hover:scale-[1.01] duration-500 shadow-2xl flex">
      <Image className="aspect-[2] object-cover rounded-xl" src={Yung} alt="HAHA" quality={100} placeholder="blur"/>
      <div className="bg-[#39719e]/50 group-hover:bg-[#39719e] duration-500 absolute bottom-0 rounded-b-xl w-full">
      <p className="p-5 text-white"><Link target="_blank" href={"https://www.nasa.gov/audience/forstudents/5-8/features/symbols-of-nasa.html"}>Interns Flying High</Link></p>
      </div>
      </div>
      </div> */}
      {data.map(gambar=>(
        <div key={gambar.date}>
          <Link href={`/blog/${gambar.date}`}>
            <Suspense fallback={<p className="text-black text-xl bg-slate-700">Loading..</p>}>
            <div className="aspect-[1.5] overflow-hidden rounded-md">
          <Image className="w-full h-full object-cover hover:scale-125 transition-all duration-500" src={gambar.url} alt="Sorry...can't render image" width={600} height={400}/>
          </div>
          </Suspense>
          <div className="mt-3">
          <p className="text-lg selection:text-white">{gambar.title}</p>
          <p className="text-sm text-slate-600 selection:text-white">{gambar.date}</p>
          </div>
          </Link>
        </div>
      ))}

      </div>
    </div>
  )
}