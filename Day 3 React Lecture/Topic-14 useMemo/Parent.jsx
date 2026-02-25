import {useState} from 'react'
import Child from "./Child";

const Parent = () => {

    const [text ,setText] = useState("");
    const [theme ,setTheme]= useState(false);
    console.log("Parent Render");

// const handleClick =()=>{
//    setTheme(theme)
//     if(theme){
//         body.style.background
//     }
// }
const sumOfN =(n)=>{
    if(n===0){
        return;
    }
    const result= (n* (n+1)/2);
}
sumOfN(+text);
// const handleChange=()=>{
//     sumOfN
// }

  return (
    <div>
      <h1>Parent Component</h1>
      <input
      type="text"
      value={text}
      placeholder='Enter your name'
      onChange={handleChange}
     // onChange={(e)=> setText(e.target.value)}
      />

      <button type="button" className={theme?"dark":"light"}
        onClick ={()=>setTheme(!theme)}>
                {theme?"Light":"Dark"}
      </button>
      <Child result ={result}/>
    </div>


  )
}

export default Parent
