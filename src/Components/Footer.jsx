
function Footer() {
  return (
    <div className="full">
       <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
         <div className="basis-1/2">
         <h1 className="text-[11.5rem] leading-none font-semibold tracking-tight">refokus.</h1>
          </div>
         <div className="basis-1/2 flex gap-4">
         <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram","twitter (x?)","LinkedIn"].map((item,index)=> <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>)}
         </div>
         <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram","twitter (x?)","LinkedIn"].map((item,index)=> <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>)}
         </div>
         <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">Refokus is a poineering digital agency driven by design empowered by technology.</p>
            <img className="w-32 mt-10" src="https://i.pinimg.com/originals/14/b9/0b/14b90bb343e8fe8b928dece37985a832.png" alt="" />
         </div>
         </div>
       </div>
    </div>
  )
}

export default Footer