import Link from 'next/link'
import { TbError404 } from 'react-icons/tb';
 
export default function NotFound() {
  return (
    <div className='w-[100vw] h-[100vh] absolute bg-black'>
    <div className='h-full flex justify-center items-center flex-col text-white'>
      <h2>Not Found</h2>
      <TbError404 color='white' size='100'/>
      <p>
        Back to  <Link className='hover:underline' href="/">HomePage</Link>
      </p>
    </div>
    </div>
  )
}