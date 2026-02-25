
import  { useEffect,useState } from 'react'

const Demo = () => {
const [response , setResponse]=useState([]);

console.log("Demo Render");
useEffect(()=>{
      getUser()
},[])
//API Call

const getUser = async()=>{
      const resp = await fetch("https://api.github.com/users/RajSresth");
      const data = await resp.json();
      setResponse(data);
}

if(response.length===0){

  return <div>Default Dummy UI</div>
}


  return (
    <div>
      Original User UI
    </div>
  )
}

export default Demo;



/*

===================Default UI 🪸🪸🪸🪸=================

import  { useEffect,useState } from 'react'

const Demo = () => {
const [response , setResponse]=useState([]);

if(response.length===0){

  return <div>Default Dummy UI</div>
}


  return (
    <div>
      Original User UI
    </div>
  )
}

export default Demo


*/