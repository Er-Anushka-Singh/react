import {useState,useRef} from "react";
const Demo =()=>{


    const [x,setX] =useState(0);
     let y =0;

     const z = useRef(0);

    console.log("Demo Render")
     const handleClickX=()=>{
        setX(x+1);
     }
      const handleClickY=()=>{
       y=y+1;
       console.log("Normal Y ",y);
     }
      const handleClickZ=()=>{
            z.current=z.current+1;
            console.log("Use Ref Z",z.current);
     }
    
    

    return <div>
        <h1>Demo Component</h1>
        <h2>State-x : {x}</h2>
        <button onClick={handleClickX}>Increment X</button><br/>
         <h2>Normal-y : {y}</h2>
          <button onClick={handleClickY}>Increment Y</button><br/>
        <h2>UseRef-z : {z.current}</h2>
          <button onClick={handleClickZ}>Increment Z</button>
    </div>

}

export default Demo;