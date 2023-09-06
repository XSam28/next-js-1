"use client"

import Mod from "@/components/modal/Modal"
import { useState } from "react"

export default function Button() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='mt-3 lg:mt-0'>
    <button onClick={() => setIsOpen(!isOpen)} className='duration-500 hover:bg-white px-4 md:px-8 py-5 border-2 group hover:-translate-y-3'><h1 className='text-xs md:text-sm text-white group-hover:text-black group-hover:scale-110 duration-500'>STORIES</h1></button>
    {isOpen && <Mod lick={setIsOpen} />}
    </section>
  )
}
