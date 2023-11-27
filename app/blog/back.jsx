"use client";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

export default function Back() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mt-5 group-hover:-translate-x-1 transition-all"
    >
      <BiArrowBack size={30} color="white" />
    </button>
  );
}
