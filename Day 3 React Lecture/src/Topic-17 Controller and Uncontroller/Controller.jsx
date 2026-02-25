import  { useState } from 'react'

const Controller = () => {

      const [username , setUserName]= useState("");
      const [email,setEmail]= useState("");
      const [password ,setPassword]= useState("");

      const handleFormSubmit=(e)=>{
            e.preventDefault();
            console.log("username", username);
            console.log("email", email);
            console.log("password", password);
            alert("Form sumbited...!");

            setUserName("");
            setEmail("");
            setPassword("");
      }

      const handleFormReset =()=>{
        console.log("Form Reset..!")
          setUserName("");
          setEmail("");
          setPassword("");
      }

        console.log("Controller component render")
  return (
      <form action="" onSubmit={handleFormSubmit} 
      onReset={handleFormReset} > 
      <label htmlFor='input1'> Username&nbsp;</label>
      <input type='text' placeholder='Enter your name' id='input1' name="username" value ={username}
      onChange={(e)=> setUserName(e.target.value)}/>
      <br/><br/>

      <label htmlFor="input2"> Email<sup style={{color:"red"}}>*</sup>&nbsp; </label>
      <input type="text" placeholder='xyz12@gmail.com' id='input2' name='email' value={email}
      onChange={(e)=>setEmail(e.target.value.trim())} required/>
      <br/><br/>

    <label htmlFor='input3'>Password<sup style={{color:"red"}}>*</sup>&nbsp;</label>
    <input type='text' placeholder='at least 8 character' id='input3' name='password' value={password}
    onChange={(e)=> setPassword(e.target.value.trim())} required/>
    <br/> <br/>

    <button type='sumbit'>Register</button>
    <button type="reset">Cancel</button>
      </form>
  )
}

export default Controller;
