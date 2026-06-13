
function Day1(){

const handleAlert=()=>{
  alert('Hyy Ayus How are You ');
}

  return(
    <>
    <div className='flex items-center justify-center min-h-screen bg-amber-300 p-6'>
      <div className='bg-amber-100 p-8 rounded-2xl shadow-xl max-w-sm text-center border border-gray-200'> 
     <h1 className='text-2xl text-sky-500 font-bold  mb-2'>Hello Ayush Day1</h1>
     <p1 className='text-red-500 font-bold  mb-1 text-x'> Hello i am Ayush yadav fontend developer</p1>
     <div className='flex item-center justify-center m-1 p-1' >
  <button onClick={handleAlert}
  className='px-4 py-2 text-blue-600  rounded-b-lg hover:bg-sky-700  text-amber-300 transition shadow-md '> Click Me</button>
     </div>
     </div> 
    </div>
    
    </>
  )
}
export default Day1;
