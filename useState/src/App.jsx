import { useState } from "react"

/*  //valu change
function App (){
 const [a,setA] = useState(20)
 function changeA(){
  setA(10)
 }
  return (
    <div className="bg-sky-200 flex justify-center text-center">
      <h1 className="font-bold">Value of a is {a}</h1>
      <button onClick={changeA} className="bg-red-500">Click</button>
    </div>
  )
}


// counter

function App() {
   const [count, setCount] = useState(0)
  function handleIncrement(){
    setCount(count+1);
  }
  function handleDecrement(){
    setCount(count-1);
  }
  function handleReset(){
    setCount(0);
  }
  return (

    <div className="bg-sky-100 text-2xl text-center flex justify-center flex-col min-h-screen gap-4">
      <h1>{count}</h1>
      <button onClick={handleIncrement} className="bg-red-400 font-bold">+</button>
      <button onClick={handleDecrement} className="bg-red-500 font-bold">-</button>
      <button onClick={handleReset}className="bg-red-600 font-bold">Reset</button>
      
    </div>
  )
}
*/
//input

function App () {

  const [text, setText] = useState("")
  return (
    <div className="min-h-screen flex items-center justify-center gap-4" >
      <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Ayush yaduvanshi" className="border p-2"/>
    <h1 className="text-2xl">You are :{text}</h1>
    </div>
  )
}


//Array ,string,objects

/*
function App (){
  const [isOn, setIsOn] = useState(false)
  
  return (
    <div className={`min-h-screen flex items-center justify-center ${isOn ? "bg-green-500" : "bg-red-500"}`}>
      <button 
        onClick={()=>setIsOn(!isOn)}
        className="px-6 py-3 bg-white rounded-xl font-bold text-xl"
      >
        {isOn ? "ON 🟢" : "OFF 🔴"}
      </button>
    </div>
  )
}*/
export default App






