import {useState,useRef} from 'react'

const Hybrid = () => {

    const [email,setEmail] = useState("");
    const [password ,setPassword] = useState("");

    const username = useRef("");

    const handleformSumbit=(e)=>{
            e.preventDefault();
            console.log(username.current.value);
            console.log("email", email);
            console.log("password", password);
            console.log("Form Sumbit...!");
            username.current.value="";
            setEmail("");
            setPassword(" ");

    }

    const handleformReset =()=>{
         username.current.value="";
            setEmail("");
            setPassword(" ");
            console.log("Form Reset..!")

    }

  return (
        <form action="" onSubmit={handleformSumbit} onReset={handleformReset}>

            <label htmlFor='input1'>UserName&nbsp;</label>
            <input type='text' placeholder='Enter your name' id='input1' name={username} ref={username}/>
            <br/> <br/>

            <label htmlFor="input2">Email&nbsp;</label>
            <input type='text' placeholder='xyz@gmail.com' id='input2' name='email' value={email} required
            onChange={(e)=> setEmail(e.target.value)}
            /><br/> <br/>

            <label htmlFor='input3'>Password&nbsp;</label>
            <input type='text' placeholder='at least 8 character' id='input3' name={password} required
            onChange={(e)=> setPassword(e.target.value)}
            /><br/> <br/>

            <button type='sumbit'>Register</button>
            <button type='reset'>Cancal</button>

        </form>
  )
}

export default Hybrid
