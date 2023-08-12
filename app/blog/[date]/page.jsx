import getIdSPace from "@/app/libs/getIdSpace"
import Image from "next/image"
import Blogs from "@/app/component/Blogs"

import { Suspense } from "react"

export default async function ImgPage({params: {date} }) {
    const imgData = await getIdSPace(date)
    return(
        <div className="w-[100vw] h-[80vh] flex">
            <Image src={imgData.url} fill className="object-cover absolute -z-30 brightness-[.30]"/>
        <Suspense fallback={<p className="text-white text-9xl">Loadiingg...............</p>}>
        <Blogs promise={imgData}/>
        </Suspense>
        </div>
    )
}
