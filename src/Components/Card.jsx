import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width,start,para ,hover='false'}) {
  
  return (
    <motion.div whileHover={{backgroundColor:hover === 'true' &&'#7443ff',padding:'25px'}} className={`bg-zinc-800 p-5 rounded-xl  ${width} min-h-[30rem] flex flex-col justify-between`}>
        <div className="w-full">
        <div className="w-full flex justify-between items-center">
            <h3>one heading</h3>
            <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium mt-10">whatever heading.</h1>
        </div>
        <div className="down w-full ">
          {
            start && (
                <>
                          <h1 className="leading-none text-6xl font-semibold tracking-tight">start a project</h1>
                          <button className="border-[1px] rounded-full mt-5 py-2 px-5 border-zinc-50">Contact Us</button>
                </>
            )
          }
          {
            para && (
<p className="text-sm text-zinc-500 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            )
          }
          
        </div>
    </motion.div>
  )
}
export default Card