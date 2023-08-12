import Image from "next/image"
import load from "@/public/loader.gif"
import localFont from "next/font/local"

const local = localFont({
  src: "../public/Azonix.otf"
})

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return(
      <div className="w-[100vw] h-[100vh] absolute z-[999999999] bg-white">
        <div className="flex items-center justify-center h-full flex-col gap-4">
    <Image className="" src={load} alt="loader" />
    <h1 className={local.className}>Loading...</h1>
    </div>
    </div>
     )
  }
