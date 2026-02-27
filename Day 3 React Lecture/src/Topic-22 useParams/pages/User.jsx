import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const User = () => {

    const [singleResponse ,setSingleResponse] = useState("");
    const {id}= useParams();

    useEffect(()=>{
        getUser();

    },[]);

    const getUser= async()=>{
        const response = await fetch(`https://api.github.com/users/${id}`);
        const data = await response.json();
        setSingleResponse(data);

    }

  return !singleResponse? <h1>Loading.....!</h1>: (
    <div >
      <h1>User Page</h1>
      <h1>id : {singleResponse.id}</h1>
      <h1>name : {singleResponse.name}</h1>
      <img src={singleResponse.avatar_url} alt=''/>
    </div>
  )
}

export default User;
