
import Card from './Components/Card'
//style used karna hai tho sirf layout ke liye hota hai 'arrangements'
function App () {
  return (
    <div className='flex items-center justify-center min-h-screen  gap-5 bg-green-400'>
      <Card name="Ali" bio="Hello I am ali"></Card >
      <Card name="Ayush" bio="Hello I am Ayush"></Card >
      <Card name="Anuj" bio="Hello I am Anuj"></Card >
    </div>
  )
}

export default App
