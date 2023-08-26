import {AiOutlineSearch} from "react-icons/ai"

export default function Button({type, isLoading}: Props) {
  const Loading = () => {
    return(
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-black"></div>
      </div>
    )
  }
  return (
    <div className="bg-white rounded-full p-2 hover:drop-shadow-lbgt transition-all duration-700"> 
    <button type={type} className="items-center flex">
      {isLoading ? <Loading/> :  <AiOutlineSearch className="text-zinc-700" size="20"/>}
    </button>
    </div>
  )
}

interface Props{
    type?: 'button' | 'submit' | 'reset' | undefined;
    isLoading?: boolean;
}
