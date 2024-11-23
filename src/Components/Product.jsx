import Button from "./Button"



function Product({val}) {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dtes w-1/3">
            <p className="mb-10">{val.description}</p>
            <div className="flex items-center gap-5">
            {val.live &&   <button className="min-w-40 px-4 py-2 bg-zinc-100 text-black text-sm font-medium rounded-full">Get Started</button>}
            {val.case &&  <button className="min-w-40 px-4 py-2 bg-zinc-100 text-black text-sm font-medium rounded-full">Case Study</button>}
            </div>
         </div>
           
      </div>
    </div>
  )
}

export default Product