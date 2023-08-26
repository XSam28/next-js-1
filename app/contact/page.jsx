"use client"
import "@/app/globals.css"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiArrowBack } from 'react-icons/bi';
import toast from 'react-hot-toast'

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
    <div className="w-[100vw] h-[100vh] fixed z-10 bg-hue bg-center bg-no-repeat select-none">
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-black/30 backdrop-blur-3xl animate-prom">
      <div className="flex h-[60%] w-full sm:w-[85%] xl:h-[70%] xl:w-[50%] bg-zinc-200 rounded-3xl">
        <div className="w-full h-full flex flex-col justify-between px-14 py-10">
          <h1 className="text-center">CONTACT</h1>
          <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-10" >
            <input className="form" id="name" type="name" placeholder="Name" required/>
            <input className="form" id="email" type="email" placeholder="Email" required/>
            <textarea className="form" id="message" type="message" placeholder="Comment" required/>
            <button disabled={loading}
            className="disabled:opacity-25 p-2 bg-blue-300 text-white font-mono rounded-full hover:bg-blue-600 transition-all w-[100px] hover:tracking-[0.4em]">input</button>
          </form>
          <div>
            <button onClick={() => router.back()} >
            <BiArrowBack/>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
