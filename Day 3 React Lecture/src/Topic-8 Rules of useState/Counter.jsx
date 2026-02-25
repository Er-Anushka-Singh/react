import {useState} from "react";

const Counter =()=>{


    const [count ,setCount ] = useState(0);
    
    const [status ,setStatus]= useState(false);
      const [username , setUsername]=useState("");
  

    const handleClick =() =>{
            setCount(count => count +1 );
            setStatus(false);
            setUsername("Anushka Singh");
           
               };

  return (<div>
        <h1>Counter Component</h1>
        <h2>Count  : {count}</h2>
        <h2>Status : {status}</h2>
        <h2>Username : {username}</h2>
        

        <button onClick={handleClick}>Increment</button>
    </div>
    );
}

export default Counter;


/*



import {useState} from "react";

const Counter =()=>{


    const [count ,setCount ] = useState(0);
    
    const [status ,setStatus]= useState(false);
    if(status){
        const [username , setUsername]=useState("");
    }

    const handleClick =() =>{
            setCount(count => count +1 );
            setStatus(false);
            setUsername("Anushka Singh");
           
               };

  return (<div>
        <h1>Counter Component</h1>
        <h2>Count  : {count}</h2>
        <h2>Status : {status}</h2>
        <h2>Username : {username}</h2>
        

        <button onClick={handleClick}>Increment</button>
    </div>
    );
}

export default Counter;

*/