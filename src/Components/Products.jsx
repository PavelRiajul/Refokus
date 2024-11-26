
import { motion } from "motion/react"
import Product from "./Product"
import { useState } from "react"

function Products() {
    var products = [
        {title:"Arqitel",description:"Aqu Executive and its employees continue to receive orders for customers and customers that get orders for customers  ",live:true,case:false },
        {title:"TTR",description:"Aqu Executive and its employees continue to receive orders for customers and customers that get orders for customers  ",live:true,case:false },
        {title:"YIT 2022",description:"Aqu Executive and its employees continue to receive orders for customers and customers that get orders for customers  ",live:true,case:true },
        {title:"Yahoo!",description:"Aqu Executive and its employees continue to receive orders for customers and customers that get orders for customers  ",live:true,case:false },
    ]

    const [position,setPosition] = useState(0);
    const mover = (val)=>{
      setPosition(val*23)
    }
  return (
    <div className="mt-32 relative">
        {products.map((val,index)=> <Product key={index} val={val} mover={mover} count={index}/>)}
        <div className=" absolute top-0 w-full h-full pointer-events-none">
          <motion.div
           initial={{y:position,x:"-50%"}}
           animate={{y:position+`rem`}}
           transition={{ease:[0.76,0,0.24,1],duration:.5}}
            className=" window w-[32rem] h-[23rem] bg-sky-100 absolute left-[44%] -translate-x-[50%] overflow-hidden">
          <motion.div animate={{y:-position+ `rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}   className=" window w-full h-full bg-sky-100"></motion.div>
          <motion.div animate={{y:-position+ `rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}   className="  window w-full h-full bg-sky-200">
            <img className="absolute left-36 top-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkG8GI34kOHFL3qyxK_45FiXU-AZR-HRCwhw&s" alt="" />
          </motion.div>
          <motion.div animate={{y:-position+ `rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}   className="  window w-full h-full bg-sky-300">
                 <img className="absolute left-24 top-20 "  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-p1ilngfstAjqu-2aaBDRrU0TCpPilWtpA&s" alt="" />
          </motion.div>
          <motion.div  animate={{y:-position+ `rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className=" window w-full h-full bg-sky-400">
             <img className="absolute left-24 top-20 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4pGxF3d9y_ZbHvC16zYr__owcDWEo8DbaA&s" alt="" />
          </motion.div>
          </motion.div>
        </div>
        
        
    </div>

  )
}
export default Products