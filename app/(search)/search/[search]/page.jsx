import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Search = async (search) => {
  try {
    const res = await fetch(
      `https://images-api.nasa.gov/search?q=${search}&media_type=image`
    );
    if (!res.ok) return notFound;
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function SearchResults({ params: { search } }) {
  const SearchResults = await Search(search);
  if (SearchResults.collection.metadata.total_hits === 0)
    return (
      <span className="flex justify-center mt-5 text-xl">
        {search} cant be found
      </span>
    );
  else
    return (
      <div className="flex space-y-9 flex-col">
        <div className="selection:text-white flex justify-center text-xs text-slate-500 space-x-10">
          <h1>results of: {search}</h1>
          <h1>total: {SearchResults.collection.metadata.total_hits}</h1>
        </div>
        <div className="grid grid-cols-1 selection:text-white gap-3">
          {SearchResults.collection.items.map((data) => (
            <div
              key={data.length}
              className="flex flex-col justify-center items-center"
            >
              <div className="bg-zinc-200 group w-[95vw] sm:w-2/3 h-20 flex items-center gap-4 overflow-hidden">
                {data.data.map((data) => (
                  <div
                    key={data.title}
                    className="order-2 group-hover:text-blue-500 text-slate-700"
                  >
                    <p className="text-[10px] text-slate-500">
                      {data.date_created}
                    </p>
                    <Link href={`/detail/${data.title}`}>
                      <h1 className=" line-clamp-1 hover:underline w-full">
                        {data.title}
                      </h1>
                    </Link>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                ))}
                {data.links.map((data) => (
                  <div
                    key={data.render}
                    className=" h-full overflow-hidden select-none order-1 flex items-center border-l-4 group-hover:border-zinc-400 group-hover:scale-110"
                  >
                    <Image
                      src={data.href}
                      width={100}
                      height={1000}
                      alt={data.render}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
