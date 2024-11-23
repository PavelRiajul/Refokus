import Button from "./Button"


function Navbar() {
  return (
    <div className="max-w-screen-xl m-auto flex items-center py-6  justify-between border-b-[1px] border-zinc-700">
    <div className="nleft flex items-center">
    <img className="w-10 h-10" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp" alt="" />

<div className="links flex gap-14 ml-20 ">
    {["Home", "Work","Culture","","News"].map((elem,index)=>(
      elem.length === 0 ? <span key={""} className="w-[2px] h-7 bg-zinc-700"></span>:(           <a key={""} className=" font-regular text-sm flex items-center gap-1" href="#">
        {index === 1 && (<span style={{boxShadow:"0 0 0.45em #00FF19"}} className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>)}
            {elem}
            </a>)
           ))}
</div>
    </div>
 <Button/>
    </div>
  )
}

export default Navbar