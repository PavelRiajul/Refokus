import Strip from "./Strip"

function Stripes() {
    var data= [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg",number:48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",number:2},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg",number:11},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5b40b9966a3a112d7_663a6cbf194837f9c0affe8e_logo.svg",number:48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg",number:2},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e95_63aed9589c2695a8bfaa920e_yahoo.svg",number:11},
    ]
  return (
    <div className="flex items-center mt-32">
        {data.map((elem,index)=>{
           return <Strip key={index} val={elem}/>
        })}
    </div>
  )
}

export default Stripes