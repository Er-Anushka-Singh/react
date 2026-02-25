
import {useState,useEffect} from 'react'

function Demo2() {

        const [count1 ,setCount1]=useState(0);
        const [count2 ,setCount2] = useState(0);


        useEffect(()=>{
          //debugger
            console.log("UseEfect Call");    // first time it call useEffect run but it store cleanUp call at one  side
             return ()=>{
                console.log("CleanUp Call");
               
            }
        },[count2]);
       
        console.log("Demo2 Render");

        const handleCount1 =()=>{
            setCount1(count1 +1) ;
        }
          const  handleCount2 =()=>{
            setCount2(count2 +10) ;
        }

        



  return (
    <div>
      <h2>Demo2 Component</h2>
      <h2>Count1 : {count1}</h2>
      <button onClick={handleCount1}>Click</button>
       <h2>Count2 : {count2}</h2>
      <button onClick={handleCount2}>Click</button>
    </div>
  )
}

export default Demo2;



/*
============================useEffect With cleanUp function return()=>{ consol.log("cleanup function")} ===========================

import {useState,useEffect} from 'react'

function Demo2() {

        const [count1 ,setCount1]=useState(0);
        const [count2 ,setCount2] = useState(0);


        useEffect(()=>{
          //debugger
            console.log("UseEfect Call");
             return ()=>{
                console.log("CleanUp Call");
                // it call when you change the page
                //npm i react-router-dom
            }
        },[]);
       
        console.log("Demo2 Render");

        const handleCount1 =()=>{
            setCount1(count1 +1) ;
        }
          const  handleCount2 =()=>{
            setCount2(count2 +10) ;
        }

        



  return (
    <div>
      <h2>Demo2 Component</h2>
      <h2>Count1 : {count1}</h2>
      <button onClick={handleCount1}>Click</button>
       <h2>Count2 : {count2}</h2>
      <button onClick={handleCount2}>Click</button>
    </div>
  )
}

export default Demo2;






============================useEffect With dependence list [count1]===========================


import {useState,useEffect} from 'react'

function Demo2() {

        const [count1 ,setCount1]=useState(0);
        const [count2 ,setCount2] = useState(0);


        useEffect(()=>{
          //debugger
            console.log("UseEfect Call");
        },[count1]);
       // useEffect call when count1 is click because it is connected with useEffect
        console.log("Demo2 Render");

        const handleCount1 =()=>{
            setCount1(count1 +1) ;
        }
          const  handleCount2 =()=>{
            setCount2(count2 +10) ;
        }

        



  return (
    <div>
      <h2>Demo2 Component</h2>
      <h2>Count1 : {count1}</h2>
      <button onClick={handleCount1}>Click</button>
       <h2>Count2 : {count2}</h2>
      <button onClick={handleCount2}>Click</button>
    </div>
  )
}

export default Demo2;



============================useEffect Without dependence list 👌nothing ===========================

import {useState,useEffect} from 'react'

function Demo2() {

        const [count ,setCount]=useState(0);


        useEffect(()=>{
          //debugger
            console.log("UseEfect Call");
        })
      // It will run after one click of count /UI change 
        console.log("Demo2 Render");

        const handleClick =()=>{
            setCount(count +1) ;
        }


  return (
    <div>
      <h2>Demo2 Component</h2>
      <h2>Count : {count}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Demo2;



============================ useEffect Empty dependence list []===========================


import {useState,useEffect} from 'react'

function Demo2() {

        const [count ,setCount]=useState(0);


        useEffect(()=>{
          //debugger
            console.log("UseEfect Call");
        },[])
        // Empty dependence list ---> run only one time
        console.log("Demo2 Render");

        const handleClick =()=>{
            setCount(count +1) ;
        }


  return (
    <div>
      <h2>Demo2 Component</h2>
      <h2>Count : {count}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Demo2;








import {useState,useEffect} from 'react'

function Demo2() {

        const [count ,setCount]=useState(0);


        useEffect(()=>{
            console.log("UseEfect Call")
            return ()=>{
                console.log("CleanUp Call")
            }
        },[])

        console.log("Demo2 Render");

        const handleClick =()=>{
            setCount(count +1) ;
        }


  return (
    <div>
      <h2>Demo2 Component</h2>
      <h2>Count : {count}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Demo2;


*/