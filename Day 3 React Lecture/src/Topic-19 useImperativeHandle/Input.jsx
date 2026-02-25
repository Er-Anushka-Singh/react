import {useImperativeHandle, useRef} from 'react'

const Input = ({ref}) => {

    const childImperativeRef =useRef("");



    useImperativeHandle(ref,()=>{

    console.log("ImperativeHandle hook");
    return {
        focus: ()=>childImperativeRef.current.focus(),
        clear :()=>childImperativeRef.current.value=""
    }
},[]);

  return <input
            type='text'
            placeholder='Enter your name'
            name='username'
            ref={childImperativeRef}
  
  />

  
   

}

export default Input
