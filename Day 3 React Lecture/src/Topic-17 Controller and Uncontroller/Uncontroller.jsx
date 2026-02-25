import  { useRef } from 'react'

const Uncontroller = () => {

    const nameRef= useRef("");
    const emailRef =useRef("");
    const passwordRef = useRef("");

    const handleformSubmit =(e)=>{
        e.preventDefault();
        console.log(nameRef.current.value);
    }

    const handleformRest =()=>{
      nameRef.current.value="";
    }

    console.log("Uncontroller Component");

  return (
 <form action="" onSubmit={handleformSubmit} onReset={handleformRest}>

        <label htmlFor='input1'>UserName&nbsp;</label>
        <input type='text' placeholder='Enter your name' id="input1" name ={nameRef} ref={nameRef}/>
        <br/> <br/> 

        <button type='sumbit'>Sumbit</button>
        <button type="reset">Reset</button>

 </form>
  )
}

export default Uncontroller;
