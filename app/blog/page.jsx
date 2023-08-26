import Image from "next/image"
import Link from "next/link";
import dataSpace from "@/app/libs/getSpace"
import Text from './text'

export const metadata = {
  title: 'Blog'
}

export default async function Products() {
const data = await dataSpace()
  return (
    <div
    className='w-full h-[1000vh] select-none flex justify-between'>
      <div className="w-full mx-auto bg-zinc-900">
      <div className="bg-parallax bg-cover bg-fixed bg-center h-[100vh]">
        <div className="w-full h-full bg-gradient-to-t from-zinc-900"></div>
      <Text/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-8 gap-3 ">
      {data.map(gambar=>(
        <div key={gambar.date}>
          <Link href={`/blog/${gambar.date}`}>
            <div className="aspect-[1.5] overflow-hidden rounded-md shadow-2xl">
          <Image className="w-full h-full object-cover hover:scale-125 transition-all duration-500" src={gambar.url} alt="Sorry...can't render image" width={600} height={400}/>
          </div>
          <div className="mt-3">
          <p className="text-xl text-white">{gambar.title}</p>
          <p className="text-sm text-slate-300">{gambar.date}</p>
          </div>
          </Link>
        </div>
      ))}
      </div>
      </div>
    </div>
  )
}