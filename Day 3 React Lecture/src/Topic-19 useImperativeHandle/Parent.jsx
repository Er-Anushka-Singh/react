import {useRef} from 'react';
import Input from "./Input";

const Parent = () => {

    const parentRef = useRef("");

    const handleFormSumbit =(e)=>{
        e.preventDefault();
        console.log("username",parentRef.current);
        

    }


  return  <form action="" onSubmit={handleFormSumbit}>
            <Input ref={parentRef}/>

            <button onClick={()=>parentRef.current.focus()}>Focus</button>
            <button onClick={()=> parentRef.current.clear()}>Clear</button>

            <button onClick={handleFormSumbit}>Sumbit</button>

        </form>
}

export default Parent;
