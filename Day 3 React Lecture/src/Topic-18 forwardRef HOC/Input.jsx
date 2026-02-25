import {forwardRef} from 'react'

const Input = (props,ref) => {
  return <input ref={ref} type={props.type} placeholder={props.placeholder} name={props.name}/>
    

}

export default forwardRef(Input);
