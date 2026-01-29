const User =()=>{

    const isLogin =true;
    // if(! isLogin){
    // return <h1>Home Page</h1>
    // }

  //  const page = isLogin?<h1>User Dashboard Pag</h1>:<h1>Home Page</h1>
    // return <h1>User Dashboard Pag</h1>
   // return page;

   return isLogin?<h1>User Dashboard Page</h1>:<h1>Home Page</h1>;
}

export default User;