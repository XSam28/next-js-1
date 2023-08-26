import Image from "next/image"
import getMission from "../libs/getMisson"
import { Montserrat, Raleway } from "next/font/google"

const font = Raleway({
    subsets: ['latin'],
    weight:  ["600"]
})

const raleway = Raleway({
    subsets: ['latin'],
    weight:  ["200"]
})

export default async function Page() {
    const data = await getMission()
  return (
    <div className="max-w-[100vw] flex items-center flex-col border-t-[0.1em] border-zinc-600">
        <div><h1 className={`${raleway.className} text-white text-6xl -tracking-wide mt-10`}>MISSION</h1></div>
    <div className="h-[80vh] xl:h-[45vh] w-[95vw] bg-parallax bg-center mb-40 bg-fixed"></div>
    <div className="bg-zinc-100 grid grid-cols-1 md:grid-cols-2 w-full selection:text-white">
        {data.collection.items.map((data)=>(
            <>
            <div key={data.href} className="bg-zinc-50 mx-6 my-5 p-2 xl:p-4 drop-shadow-2xl rounded-md">
            {data.data.map((data)=>(
                <div key={data.title} className="flex justify-between text-xs">
                <p># {data.date_created}</p>
                <p>{data.location}</p>
                </div>
            ))}
            {data.links.map((data)=>(
                <div key={data.render} className="grid aspect-video overflow-hidden select-none">
                <Image className="w-full h-full object-cover hover:scale-105 transition-all duration-500" src={data.href} width={100000} height={20000} alt="ns"/>
                </div>
            ))}

            {data.data.map((data)=>(
                <>
                <h1 className={`${font.className} -tracking-wider text-zinc-600 line-clamp-2 text-xl`}>{data.title}.</h1>
                </>
            ))}
            </div>
            </>
        ))}
    </div>
    </div>
  )
}