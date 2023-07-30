import { useState } from 'react'
import ConfirmData from './components/confirmData'
import Description from './components/description'
import Order from './components/Order'
import Title from './components/Title'


function App() {
  
  return (
    <>
      <div className="bg-purple-500 py-14">
        <div className="bg-white w-3/5 m-auto flex justify-around py-10 px-6 rounded">
          <div className="left">
            <Order num="1" title = "Choose title"/>
            <Order num="2" title = "Choose description" />
            <Order num="3" title = "Confirm data" />
          </div>
          <div className="right">
            
            <Description title={"Choose Description Content"} btn1="Back" btn2="Submit description"/>
            
          </div>
        </div>
      </div>

      
    </>
  )
}

export default App
