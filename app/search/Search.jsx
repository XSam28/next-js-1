'use client'
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import {AiOutlineSearch} from "react-icons/ai"

export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = async (e) => {
        e.preventDefault();
        setSearch("");
        router.push(`/search/${search}`);
    }
  return (
    <div className="flex justify-center w-[100vw]">
    <form onSubmit={handleSearch}>
      <div className="justify-center flex items-center border border-black px-[3px] py-1 pl-3 w-full rounded-full">
        <input
        className="focus:outline-none w-[80vw]"
        type="text"
        value={search}
        placeholder="search stories"
        onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-black hover:bg-black/80 rounded-full px-3 py-3 transition-all duration-300 hover:drop-shadow-low text-white" type="submit"> <AiOutlineSearch /> </button>
        </div>
    </form>
    </div>
  )
}
