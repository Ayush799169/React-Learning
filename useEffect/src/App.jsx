import {useState , useEffect } from 'react'
/*
function App(){
  useEffect(()=>{
    console.log("componats")
  },[])

   return
   <>
      <h1>Hello React app Hooks in useseffects</h1>
  </>
}

*/
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Page load hua!")
  }, [])

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">{count}</h1>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl"
      >
        Add
      </button>
    </div>
  )
}

export default App

