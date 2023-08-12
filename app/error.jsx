'use client'
import { RxReload } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
 
export default function GlobalError({ error, reset }) {
  const router = useRouter();
  const handleRefresh = () => {
    router.reload();
  };
  return (
    <html>
      <body>
        <div className="w-[100vw] h-[100vh] bg-black flex justify-center items-center flex-col">
        <h2 className="text-white">Something went wrong!</h2>
         <p className='text-white'>Reload this page</p>
         <br />
         <button onClick={() => reset()}> <RxReload className='active:rotate-180 duration-500' color='white' size='30'/> </button>
        </div>
      </body>
    </html>
  )
}