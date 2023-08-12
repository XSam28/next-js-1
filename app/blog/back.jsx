"use client"
import { useRouter } from "next/navigation"
import { BiArrowBack } from 'react-icons/bi';

export default function Back() {
    const router = useRouter()
  return (
    <div>
          <button onClick={() => router.back()} className="mt-5 hover:-translate-x-2 transition-all"><BiArrowBack size={30} color="white"/></button>
    </div>
  )
}
