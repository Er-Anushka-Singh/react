import React from 'react'
import { Link ,useRouteError } from 'react-router-dom'

const NotFound = () => {

  const err = useRouteError();
  return (
    <div className='error'>
     <div className='container'>
        <h1> <span style={{color:"red"}}>404</span>Page  Not Found..!!</h1>   
      <p>Back to <Link>Home Page</Link></p>
     </div>
    </div>
  )
}

export default NotFound;
