import getIdSPace from "@/app/libs/getIdSpace"
import Image from "next/image"
import Blogs from "@/app/components/Blogs"

export default async function ImgPage({params: {date}}) {
    const imgData = await getIdSPace(date)
    return(
        <div className="w-[100vw] h-[80vh] flex">
            <Image src={imgData.url} alt="blog" fill className="object-cover absolute -z-30 brightness-[.30]"/>
        <Blogs promise={imgData}/>
        </div>
    )
}
