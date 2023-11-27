import Image from "next/image";
import Back from "@/app/blog/back";
const Search = async (detail) => {
  const res = await fetch(
    `https://images-api.nasa.gov/search?q=${detail}&media_type=image`
  );
  return await res.json();
};

export default async function DetailResults({ params: { detail } }) {
  const details = await Search(detail);
  return (
    <div className="w-full min-h-[83vh] border-y border-slate-500 ">
      <Back />
      <div className="grid grid-cols-4">
        {details.collection.items.map((items) => (
          <>
            {items.links.map((photo) => (
              <div key={photo.href}>
                <Image
                  src={photo.href}
                  alt={photo.render}
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}
