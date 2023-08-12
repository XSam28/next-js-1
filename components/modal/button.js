"use client"

export default function Button(porps) {
  return (
    <div>
        <button onClick={() => porps.lick()} className="text-white lg:m-20 p-2 px-3 border border-white">X</button>
    </div>
  )
}
