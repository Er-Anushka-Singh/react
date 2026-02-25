
import {useState , useEffect} from 'react'


const Demo1 =()=> {
const [count , setCount]=useState(0);

useEffect (()=>{
        console.log("Demo1- useEffect");
},[])

  console.log("Demo1-Render")
  return (
    <div className ='demo1'>
      <h2>Demo-1 Component</h2>
      <h3>Count : {count}</h3>
      <button className='btn' onClick={()=> setCount(count +1)}>Add</button>
    </div>
  )
}

export default Demo1;
