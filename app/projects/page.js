import Link from "next/link"
import getData from "../libs/getData"

export default async function ProjectsList() {
  const user = await getData()
    return (
      <div>
        {user.map(users=>{
          return(
          <>
          <Link href={`/projects/${users.id}`}>
          <h1 className="bg-white flex justify-center text-lg text-black selection:text-white" key={users.id}>{users.name}</h1>
          </Link>
          </>
          )
        })}
      </div>
    )
  }
  