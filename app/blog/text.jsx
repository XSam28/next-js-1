'use client'
import { motion } from "framer-motion";
import local from "next/font/local"

const myFont = local({
    src: "../../public/nulshock.otf"
  })

export default function Text() {
  return (
    <motion.div 
    initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.75,
    }}
className="flex flex-col justify-center h-full absolute top-0 left-8 2xl:left-40">
  <h1 className={`text-[60px] md:text-[100px] 2xl:text-[150px] stroke-black stroke-2 text-white drop-shadow-wad ${myFont.className}`}>Nebula</h1>
</motion.div>
  )
}
