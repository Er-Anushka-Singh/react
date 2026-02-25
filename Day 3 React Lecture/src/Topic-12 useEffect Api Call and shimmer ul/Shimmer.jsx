
import "./style.css"

const Shimmer = () => {
  return (
    <div className="shimmer-container">
        {Array(18).fill("").map((_,index) =>  <div key={index} className="card"></div>)}
    </div>
  )
}
       
      


export default Shimmer;



/*
import "./Shimmer.css";

function Shimmer() {
  return (
    <div id="shimmer-container">
    
       <div className='card'></div>
        <div className='card'></div>
         <div className='card'></div>
          <div className='card'></div>

          {Array(12).fill("").map}
    </div>
  )
}

export default Shimmer

*/
