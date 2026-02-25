import {useRef, useState} from "react";

const Demo3 =() =>{

    const [count ,setCount] = useState(0);

    const z = useRef(null);
    // z={current : null}

    const handleCount =()=>{
        setCount(count +1);
        console.log("useRef ",z.current)
        z.current.style.color="red";
    }

    return  (
    <div>

        <h1>Demo3 Component</h1>
        <h2>Count : {count}</h2>
        <button onClick={handleCount}>Click</button> <br/><br/>
        <input type ="text" placeholder="Enter fullname" name = "fullname" ref={z}/>
    </div>
    )

}

export default Demo3;