import Search from "./Search"

export const metadata = {
    title: "Search"
}

export default function RootLayout({children}) {
  return (
    <main className='flex flex-col bg-white py-10 selection:text-white'>
        <div className="w-[100vw] min-h-[75vh]">
            <Search />
            <div>{children}</div>
        </div>
    </main>
  )
}
