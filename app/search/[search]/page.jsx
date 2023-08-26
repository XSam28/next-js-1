import Image from "next/image";
const Search = async (search) => {
    const res = await fetch(`https://images-api.nasa.gov/search?q=${search}&media_type=image`);
    return await res.json();
}

export default async function SearchResults({params: {search}}) {
    const SearchResults = await Search(search)
  return (
    <div className="flex space-y-9 flex-col">
    <div className="selection:text-white flex justify-center text-xs text-slate-500 space-x-10">
    <h1>results of: {search}</h1>
    <h1>total: {SearchResults.collection.metadata.total_hits}</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 selection:text-white gap-5">
        {SearchResults.collection.items.map((data)=>(
            <div key={data.title} className="flex flex-col justify-center items-center">
                <div className="bg-zinc-200 w-5/6 h-20 flex items-center gap-4">
                {data.data.map((data)=>(
                <div key={data.title} className="w-3/6 order-2">
                <h1 className="text-slate-700 line-clamp-1 ">{data.title}</h1>
                </div>
                ))}
            {data.links.map((data)=>(
            <div key={data.render} className=" h-full overflow-hidden select-none order-1 flex items-center border-l-4 border-zinc-400">
            <Image src={data.href} width={100} height={1000} alt={data.render}/>
            </div>
            ))}
            </div>
            </div>
        ))}
    </div>
    </div>
  )
}
