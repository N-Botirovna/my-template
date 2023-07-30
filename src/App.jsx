import { useState } from 'react'
import Description from './components/description'
import Order from './components/Order'
import Title from './components/Title'


function App() {
  const [title, setTitle] = useState("Choose title content")
  const [btn1, setBtn1] = useState("Submit title")
  const [btn2, setBtn2] = useState("")

  let handleClick1 = () =>{
    setTitle("Choose title content")
    setBtn1("Submit title")
    setBtn2("")
  }
  let handleClick2 = () =>{
    setTitle("Choose description content")
    setBtn1("Back")
    setBtn2("Submit Description")
  }
  let handleClick3 = () =>{
    setTitle("Are you happy now?")
    setBtn1("No, go back")
    setBtn2("Yes, go ahead")
  }
  return (
    <>
      <div className="bg-purple-500 py-14">
        <div className="bg-white w-3/5 m-auto flex justify-around py-10 px-6 rounded">
          <div className="left">
            <button className="block mb-7" onClick={handleClick1}>
            <Order num="1" title = "Choose title"/>
            </button>
            <button className="block mb-7" onClick={handleClick2}>
            <Order num="2" title = "Choose description" />
            </button>
            <button className="block mb-7" onClick={handleClick3}>
            <Order num="3" title = "Confirm data" />
            </button>
          </div>

          <div className="right">
            <Description title={title} btn1={btn1} btn2={btn2}/>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default App
