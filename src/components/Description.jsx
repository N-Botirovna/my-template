import App from "../App";
let submitButton = () =>{
    switch (title) {
        case "Choose title content":  
            handleClick1;
            break;
        case "Choose description content":  
            handleClick2;
                break;
        case "Are you happy now?":  
            handleClick3;
                break;
        default:
            break;
    }
}
let backButton = () =>{
    console.log("fasf");
}

function Description({title, btn1, btn2}) {

  return (
    <>
      <p className="mb-7 font-semibold text-lg">{title}</p>
      <button className="bg-zinc-300 py-3 px-4 rounded" onClick={backButton}>{btn1}</button>
      <button className="bg-zinc-300 py-3 px-4 ml-2 rounded" onClick={submitButton}>{btn2}</button>
    </>
  )
}

export default Description;