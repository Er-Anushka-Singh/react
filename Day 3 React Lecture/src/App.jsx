import {Outlet} from "react-router-dom";
import "./index.css"

import Header from "./Topic-22 useParams/pages/Header";


const App = () => {
  return (
    <div id="app-component">
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default App;






/*
import Header from "./Topic-21 React Router Part-2/Header";
import {Outlet} from "react-router-dom"
import "./Topic-21 React Router Part-2/style.css"

const App =()=>{
  
  return( 
  <div id="app-component" >  
    <Header/>
    <Outlet/>
    </div>
  );
};

export default App;
*/

/*

import { useState ,useEffect} from "react";
import Demo1 from "./Topic-11 Advance useEffect/Demo1"


const App =()=>{
     const [count ,setCount]=useState(0);

     useEffect(()=>{
       console.log("App useEffect");
     },[])
 
  return( 
  <div id="app-component">
    <h1>App Component</h1>
    <div id="app-container">
      <h3>Count : {count}</h3>
      <button className='btn' onClick={()=> setCount(count +1)}>Add</button>
       
       <Demo1/>
       </div>
  </div>
  );
};

export default App;




import Demo from "./Topic-10 useEffect/Demo"
import Demo2 from "./Topic-10 useEffect/Demo2";


const App =()=>{
 
 
  return <div>
  <Demo2/>
  </div>
}

export default App;


import Demo3 from "./Topic-9 useRef Hook/Demo3";


const App =()=>{
 
 
  return <div>
   {/* <Demo/> }
   {/* <Demo2/> }
   <Demo3/>
  </div>
}

export default App;



import Counter from "./Topic-8 Rules of useState/Counter";

const App =()=>{
 
 
  return <div>
   <Counter/>
  </div>
}

export default App;




import Counter from "./Topic-7 useState Hook/Counter";

const App =()=>{
 
 
  return <div>
   <Counter/>
  </div>
}

export default App;

import Counter from "./Topic-7 useState Hook/Counter";

const App =()=>{
 
  return <div>
   <Counter/>
  </div>
}

export default App;



import Parent from "./Topic-6 Synthetic Event/Parent";

const App =()=>{
  return <div>
   <Parent/>
  </div>
}

export default App;



import Parent from "./Topic-4 Props Immutable/Parent";

const App =()=>{
  return <div>
   <Parent/>
  </div>
}

export default App;


import Parent from "./Topic-5 default and Render Props/Parent";

const App =()=>{
  return <div>
   <Parent/>
  </div>
}

export default App;



import Parent from "./Topic-4 Props Immutable/Parent";

const App =()=>{
  return <div>
   <Parent/>
  </div>
}

export default App;






import User from "./Topic-3 map reduce filter/User"

const App =()=>{
  return <div>
   <User/>
  </div>
}

export default App;









main 
    App
        user
            List
            

*/






// Component Composition/ composite component


/*

import User from "./Topic-2 conditional rendring/User";

const App =()=>{
  return <div>
   <User/>
  </div>
}

export default App;



import Props from "./Topic-1/Props/Props";

const App =()=>{
  return <div>
    <Props/>
  </div>
}

export default App;




 import pic from "./assets/react.svg";
import React from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";


 Implicit return type arrow function component
const App = () => (
   <>
    <Footer></Footer>
   <h1>App Component</h1>
    <Header></Header>
  </>
)

export default App;



const App = () => {
  return <>
    <Footer></Footer>
   <h1>App Component</h1>
    <Header></Header>
  </>
}


 import React from "react";
react arrow function component export =rafce 
const App= ()=> {

  return <h1>App Component</h1>
}

export default App;

 const h1 = () =>{<h1 >Hello Developer !</h1>};

export default h1;

 JSX= React Element = Js Object{}
 const h1 = <h1 id="heading">Learning React</h1>
export const h2 = <h2>Hello from React</h2>

function Great(){
  const msg = <h1>Namaste Develpoer ! </h1>

  return msg;
}

function App(){
  const result = <div id="container">
                  {h1}
                  {Great()}
                  </div>

  return result;
}

export default App;


const h1 = <h1 id="heading">Hello from React</h1>

const username = "Tinku";

const isLogin =false;

const tag1 = <h3>Login</h3>
const tag2 = <h3>Logout</h3>

export const div = <>
  {h1}

  {isLogin ? tag2 : tag1}
  { {conditional rendering = condition ? op1:op2} }

  {username && "Hello"}
{ short circuit operator }

 import {Fragment} from "react";
export const div = <Fragment className="container" >
  {h1}

  {isLogin ? tag2 : tag1}
  { {conditional rendering = condition ? op1:op2} }

  {username && "Hello"}
{ short circuit operator }
</Fragment>


import React from "react";
export const div = <React.Fragment className="container" >
  {h1}

  {isLogin ? tag2 : tag1}
  {{conditional rendering = condition ? op1:op2} }

  {username && "Hello"}
{short circuit operator }
</React.Fragment>


export const div = <div className="container" >
  {h1}
  <img src={pic} />
  {username && console.log("Hello")}
  {isLogin ? console.log("Hello user") : console.log("Pls login")}

</div>

const username = "Tinku";
export const div= <div>
  Good Morning {username}
</div>




export const parent = <div className="parent">
  <h1> Heading parent 1
  </h1>
  <h2>Heading parent 2</h2>
</div>

*/