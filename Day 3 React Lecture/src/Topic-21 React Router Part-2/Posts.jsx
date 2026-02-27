import React from 'react'

import { useLoaderData } from 'react-router-dom';

const Posts = () => {

const posts = useLoaderData();

console.log("Posts Render ", posts);

  return (
    <div className='posts'>
      <h1>Wecome To Posts page</h1>
    </div>
  )
}

export default React.memo(Posts);
