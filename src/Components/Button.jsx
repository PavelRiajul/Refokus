import { IoIosReturnRight } from "react-icons/io";

function Button() {
  return (
    <div className="min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-around">
     <span className="text-sm font-medium">Get Started</span>
     <IoIosReturnRight/>
    </div>
  )
}

export default Button