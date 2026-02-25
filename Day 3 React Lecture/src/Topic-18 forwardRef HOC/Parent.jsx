import {useRef} from 'react'
import Input from './Input';

const Parent = () => {
        const nameRef = useRef("");

        const handleformSubmit =(e)=>{

            e.preventDefault();
            console.log("username",nameRef.current);
            console.log("Form Sumbit");

        }

  return (
   <>
        <h2>SignIn</h2>
        <form action="" onSubmit={handleformSubmit}>

            <Input
                ref={nameRef}
                placeholder="Enter your name"
                type="text"
                name="username"
            />

        </form>
   </>
  )
}

export default Parent
