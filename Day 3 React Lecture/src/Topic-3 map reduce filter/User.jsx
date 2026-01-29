import List from "./List";

const User = () =>{

const person = ["Tinku", "Chombu","chombi","dinga","Hello"]

return <ul id="user-component">

   {

    person.map((element,index,array)=> {
         return <List username={element} key={index} />
      })
    
   }
</ul>

}


export default User;


/*

import List from "./List";

const User = () =>{

const person = ["Tinku", "Chombu","chombi","dinga","Hello"]

return <ul id="user-component">

   {

    person.map((element,index,array)=> {
         return <List username={element} />
      })
    
   }
</ul>

}

export default User;


============================================================================




import List from "./List";

const User = () =>{

const person = ["Tinku", "Chombu","chombi","dinga","Hello"]

return <ul id="user-component">

   {

    person.map((element)=> <List username={element} />)
   }
</ul>

}

export default User;


=================================================================================


import List from "./List";

const User = () =>{

const person = ["Tinku", "Chombu","chombi","dinga","Hello"]

return <ul id="user-component">

      <List username={person[0]}/>
      <List username={person[1]}/>
      <List username={person[2]}/>

</ul>

}

export default User;


===============================================================================

const User = () =>{

const person = ["Tinku", "Chombu","chombi","dinga","Hello"]

return <ul id="user-component">

   {

    person.map((element,index)=> <li key={index}>UserName : {element}</li>)
   }
</ul>

}

export default User;

==================================================================================


const User = () =>{

const person = ["Tinku", "Chombu","chombi"]

return <div>

   {

    person.map(element=> <h2>UserName : {element}</h2>)
   }
</div>

}

export default User;



=========================================================================


const User = () =>{

const person = ["Tinku", "Chombu","chombi"]

return <div>

   {

    person.map(element=>{
       // return "Hii "+" "
       return <h2>UserName : {element}</h2>
    })
   }
</div>

}

export default User;


===========================================================================


const User = () =>{

const person = ["Tinku", "Chombu","chombi"]

return <div>

    <h2>UserName : {person [0]}</h2>
    <h2>UserName : {person [1]}</h2>
    <h2>UserName : {person [2]}</h2>
</div>

}

export default User;

*/
