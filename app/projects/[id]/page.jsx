import getUsers from '@/app/libs/getUsers'
import getUserPost from "@/app/libs/getUserPost"
import { Suspense } from 'react'

export default async function page({params: {id}}) {
  //inisialisasi both request in parallel
  const userData = getUsers(id)
  const userPost = getUserPost(id)

    //await for both request to complete
    const [user, post] = await Promise.all([userData, userPost])
  return(
    <div>
      <h1 className='text-white'>User Information</h1>
      <p>{user.name}</p>
      <Suspense fallback={<p className='text-5xl text-white'>Loadd</p>}>
      {post.map(poost=>(
        <p className='text-white' key={poost.id}>{poost.body}</p>
      ))}
      </Suspense>
    </div>
  )
}
