import Link from "next/link"
import Back from "@/app/blog/back"
import Image from "next/image"

export default async function Blogs({promise}) {
    const imgData = await promise
  return (
    <div className="w-full flex justify-center items-center flex-col mx-5">
    <div className="max-w-md">
    <h1 className="text-white text-xl text-center font-extrabold mb-3">{imgData.title}</h1>
    <Link target="_blank" href={imgData.hdurl}>
        <div className="w-full aspect-[2] overflow-hidden rounded-md">
    <Image className="object-cover scale-125 hover:scale-105 transition-all" src={imgData.url} alt="Sorry Can't render image" width={600} height={500}/>
    </div>
    </Link>
    <p className="text-slate-400 text-xs">Date: {imgData.date}</p>
  <p className="text-sm text-slate-300 text-justify mt-3">{imgData.explanation}</p>
  <Back/>
</div>
</div>
  )
}
