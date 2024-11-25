

function Work() {
  var images =[
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66bf07ff7266875aeb792e36_All%20Voices%20-%204%203.webp",top:"50%", let:"50%", isActive:false},
    {url:"https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/6346b68e7f858311216e120b_V2%20Tools%20OpenGraph%20Final.jpg", top:"56%", let:"44%", isActive:true},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d81b5919f738bad40a7c_Silvr%20-4%203.webp", top:"45%", let:"56%", isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d405786d15acd0e22a91_Kablamo%20-%204%203.webp", top:"60%", let:"53%", isActive:false},
  ]
  return (
    <div className="w-full mt-10">
        <div className="max-w-screen-xl mx-auto text-center relative">
            <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight">work</h1>

            <div className="w-full h-full  absolute top-0"> 
              {images.map(
                (elem,index)=>
                  (elem.isActive && (
                  <img className=" absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]" key={index} src={elem.url} style={{top: elem.top, left: elem.let}}
                   alt="" />) )
              )}
            </div>
        </div>
    </div>
  )
}

export default Work