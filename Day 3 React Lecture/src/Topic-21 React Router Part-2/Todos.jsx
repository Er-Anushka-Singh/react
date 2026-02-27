import React from 'react'

import { useLoaderData } from 'react-router-dom';

const Todos = () => {

  const todos = useLoaderData();

  console.log("Todos render ",todos);

  return (
    <div className='todos'>
      <h1>Welcome to Todos</h1>
    </div>
  )
}

export default Todos;
