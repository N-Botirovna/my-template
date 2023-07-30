

function Description({title, btn1, btn2}) {
  
  return (
    <>
      <p className="mb-7 font-semibold text-lg">{title}</p>
      <button className="bg-zinc-300 py-3 px-4 rounded">{btn1}</button>
      <button className="bg-zinc-300 py-3 px-4 ml-2 rounded">{btn2}</button>
    </>
  )
}

export default Description;