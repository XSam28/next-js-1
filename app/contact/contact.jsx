"use client"
import "@/app/globals.css"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiArrowBack } from 'react-icons/bi';
import toast from 'react-hot-toast'
import {SlSocialInstagram} from "react-icons/sl"
import {BsGithub} from "react-icons/bs"
import Link from "next/link";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }
  
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if(res.ok){
      console.log("Message Sent Success")
      setLoading(false)
      toast.success('Message successfully Sent')
      //reset
      e.target.name.value='';
      e.target.email.value='';
      e.target.message.value='';
    }

    if(!res.ok){
      console.log("Can't sent")
      setLoading(false)
      toast.error("Try again")
    }

  }


  const router = useRouter()
  return (
    <div className="w-[100vw] h-[100vh] absolute">
      <div className="w-[100vw] h-[100vh] absolute bg-hue bg-center bg-no-repeat select-none animate-prom"></div>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-black/30 backdrop-blur-3xl">
      <div className="flex sm:flex-row flex-col h-[70%] w-full sm:w-[85%] xl:h-[70%] xl:w-[50%] bg-zinc-200 rounded-3xl">
        <div className="w-full h-full flex flex-col justify-between px-14 py-10">
          <h1 className="text-center">CONTACT</h1>
          <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-10" >
            <input className="form" id="name" type="name" placeholder="Name" required/>
            <input className="form" id="email" type="email" placeholder="Email" required/>
            <textarea className="form" id="message" type="message" placeholder="Message" required/>
            <button disabled={loading}
            className="disabled:bg-gray-700 p-2 hover:bg-blue-300 text-white font-mono rounded-full bg-blue-600 transition-all w-[100px]">
              {loading ? 'Sending' : 'Submit'}</button>
          </form>
          <div>
            <button onClick={() => router.back()} >
            <BiArrowBack/>
            </button>
          </div>
        </div>

        <div className="bg-white flex flex-col justify-between items-center sm:w-10/12 py-10 space-y-6">
          <div><h1>FOLLOW ME</h1></div>
          <div className="flex">
            <ul className="flex space-x-8">
        <Link href="https://www.instagram.com/user110046/" target="blank"><li className="hover:bg-black rounded-full p-3 transition-all hover:text-white"><SlSocialInstagram size={30}/></li></Link>
        <Link href="https://github.com/XSam28" target="blank"><li className="hover:bg-black rounded-full p-3 transition-all hover:text-white"><BsGithub size={30}/></li></Link>
        </ul>
        </div>
        <div></div>
      </div>

      </div>
      </div>
    </div>
  )
}
