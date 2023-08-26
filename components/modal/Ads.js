"use client"

import vid from "@/public/ha.gif"
import Image from "next/image"
import Butt from "./button"

export default function Ads() {
  const lick = () => {
    return document.getElementById("jam").style.display='none'
  }
  return (
    <>

    <div id="jam" className="z-[9999] absolute w-[100vw]">
    <Butt lick={lick} />

      <div className="fixed inset-0 bg-black/50 bg-opacity-75 transition-opacity -z-10">
      </div>
      <Image
      src={vid}
      className="lg:w-[50vw] m-auto"
      alt="wh"
      />
    </div>
    </>

  )
}

