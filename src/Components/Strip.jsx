function Strip({val}) {
  return (
    <div className="w-[16.66%] px-10 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center">
        <img className="w-20" src={val.url} alt="" />
        <span className="font-semibold">{val.number}</span>
    </div>
  )
}

export default Strip