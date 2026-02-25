import {useState} from "react" ;
import Button from "./Button";
import User from "./Use";

const Counter = () =>{
       
        const [count,setCount]= useState(0);
       
 console.log("Component Render");
    const increment =() =>{
            setCount(count => count +1 );
               };
    

    return (
        <div id ="counter-component">
        <h1>Counter Component</h1>
        <h2>Count  : {count}</h2>
      
        <Button text="Increment" increment={increment} />
        <User/>
    </div>
    );
};

export default Counter;








/*

import {useState} from "react" ;
import Button from "./Button";
import User from "./Use";

const Counter = () =>{
       
        const [count,setCount]= useState(0);
       
 console.log("Component Render");
    const increment =() =>{
            setCount(count => count +1 );
               };
    

    return (
        <div id ="counter-component">
        <h1>Counter Component</h1>
        <h2>Count  : {count}</h2>
      
        <Button text="Increment" increment={increment} />
        <User/>
    </div>
    );
};

export default Counter;


===========================================================================


useState cannot write in if or else block,while,for loop because if block 

====================================================================================

import {useState} from "react" ;

const Counter = () =>{
       
        const [count,setCount]= useState(0);
        const [username,setUsername]= useState("");
        const [age,setAge]= useState(0);
        
    console.log("Counter Component Render")

    const handleClick =() =>{
            setCount(count => count +1 );
            setUsername("Anushka Singh");
            setAge(10);
               };
    

    return (
        <div>
        <h1>Counter Component</h1>
        <h2>Count  : {count}</h2>
        <h2>Username  : {username}</h2>
        <h2>Age  : {age}</h2>
        <button onClick={handleClick}>HandleClick</button>
    </div>
    );
};

export default Counter;


=============================🪸🪸🪸🪸Concept-4🪸🪸🪸🪸🪸=====================


import {useState} from "react" 

const Counter = () =>{
       
        const [count,setCount]= useState(0); 
        console.log("conunter Render")
  
    const increment =() =>{
            setCount(count=> count +1 );
               };
    

    return (<div>
        <h1>Counter Component</h1>
        <h2>Count  : {count}</h2>
        <button onClick={increment}>Increment</button>
    </div>
    );
};

export default Counter;


=============================🪸🪸🪸🪸Concept-4🪸🪸🪸🪸🪸=====================

import {useState} from "react" 

const Counter = () =>{
       
        const [count,setCount]= useState(0); 
        console.log("conunter Render")
  
    const increment =() =>{
            setCount((prev)=>{
                prev =prev+1;
                console.log("prev-1 ",prev)
                return prev;
            });
             setCount((prev)=>{
                prev =prev+1;
                console.log("prev-2 ",prev)
                return prev;
            });
            console.log("count : ",count);
    }

    return <div>
        <h1>Counter Component</h1>
        <h2>Count  : {count}</h2>
        <button onClick={increment}>Increment</button>
    </div>
}

export default Counter;

=============================🪸🪸🪸🪸Concept-3🪸🪸🪸🪸🪸=====================


import React ,{useState} from "react" 

const Counter = () =>{
       
        const [count,setCount]= useState(0); 
        console.log("conunter Render")
  
    const increment =() =>{
            setCount(count+ 1);

    }

    return <div>
        <h1>Counter Component</h1>
        <h2>Count  : {count}</h2>
        <button onClick={increment}>Increment</button>
    </div>
}

export default Counter;


=============================🪸🪸🪸🪸Concept-2🪸🪸🪸🪸🪸=====================


import React ,{useState} from "react" 

const Counter = () =>{
    ===========React state Variable
        const [countReact ,setCountReact]= useState(0); 
        console.log("conunter Render")
        /*================
          useState should be first line in component
          useState give a array ,in array  it have [intial_value , function] , if intial value 
          intialized before  then we have to give function with (set) variable
        ===================
   let countJs =0;  // Js local variable inside component

   

    const incrementCountJs =() =>{
            countJs++;      
        console.log("Count : ",countJs);
    }

    const incrementCountReact =() =>{
            setCountReact(countReact+ 1);
    }

    return <div>
        <h1>Counter Component</h1>
        <h2>Count React : {countReact}</h2>
         <h2>Count Js : {countJs}</h2>
        <button onClick={incrementCountJs}>Increment Count Js</button>
         <button onClick={incrementCountReact}>Increment Count React</button>
    </div>
}

export default Counter;



=============================🪸🪸🪸🪸Concept-1🪸🪸🪸🪸🪸=====================


what is State?
Ans--> a variable created accoding to react called as state


========Here local variable created by javascript  which cannot  inform to react and cannot refelect or  update to UI========


const Counter = () =>{


    let count =0;

    const incrementCount =() =>{
        console.log("Click");
            count++;
        console.log("Count : ",count)
    }

    return <div>
        <h1>Counter Component</h1>
        <h2>Count : {count}</h2>
        <button onClick={incrementCount}>Increment</button>
    </div>
}

export default Counter;

*/