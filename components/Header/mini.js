import { AiOutlineClose } from "react-icons/ai"
import { SiNasa, SiSpacex } from 'react-icons/si';
import localfont from "next/font/local"
import Link from "next/link";
import { link } from "./data";

const maFont = localfont({
  src : "../../public/Azonix.otf"
})

export default function mini(props) {
  return (
    <>
    <div onClick={()=>props.clos()} className="md:hidden w-[40vw] h-[100vh] z-[9999] fixed bg-black/80 top-0 left-0"></div>
    <div className="w-[60vw] h-[100vh] z-[999999] fixed bg-black top-0 right-0 md:hidden">
    <section className="z-[999999] absolute -left-10 top-8"><button onClick={()=> props.clos()}><AiOutlineClose size="25" /></button></section>
    <div className="w-[60vw] flex justify-center border-b border-b-white/50 pt-3">
      <section className={maFont.className}>
    <h1 className="text-2xl">SPACE.BLOG</h1>
      </section>
    </div>
        <div className="flex justify-center items-center w-[60vw] h-[90vh] flex-col gap-5">
          {link.map((link)=>
        <Link onClick={()=>props.clos()} className="text-white hover:text-black duration-75 hover:bg-white p-3 w-full text-center" key={link.id} href={link.url}>{link.title}</Link>
        )}
        </div>
        <div className="w-[60vw] absolute bottom-0 flex justify-evenly border-t border-t-white/50">
          <SiNasa size="50"/>
          <SiSpacex size="50"/>
        </div>
    </div>
    </>
  )
}
