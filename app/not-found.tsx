import Link from 'next/link'
import { TbError404 } from 'react-icons/tb';
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center w-[100bw] h-[80vh] flex-col text-white'>
      <h2>Not Found</h2>
      <TbError404 color='white' size='100'/>
      <p>
        Back to  <Link className='hover:underline' href="/">HomePage</Link>
      </p>
    </div>
  )
}