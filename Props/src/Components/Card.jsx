
//styles yeha se suru hota hai     //yeha per prpos hota hai 
function Card  ({name,bio})  {
  return (
    <div className=" bg-sky-200 p-3 rounded-2xl shadow-xl shadow-amber-200 m-2 cursor:pointer transition-all duration-300 hover:rotate-3">
      <h2 className="text-pink-500 font-bold ">{name}</h2>
      <p1 className="text-amber-500 font-bold">{bio}</p1>
      
    </div>
  )
}

export default Card
