

import {useState,useEffect} from 'react'
import Demo1 from './Demo1';

const Demo2 =() => {
    
const [count , setCount]=useState(0);


useEffect(()=>{
  console.log("App useEffect");
},[count])

console.log("App -Render");
  return (
    <div className ='demo2'>
      <h2>App Component</h2>
      <h3>Count : {count}</h3>
      <button className='btn' onClick={()=> setCount(count +1)}>Add</button>
      <Demo1/>
    </div>
  )
}

export default Demo2;
