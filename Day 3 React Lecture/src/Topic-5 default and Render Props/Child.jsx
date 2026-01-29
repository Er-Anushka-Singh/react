

// Render Props
const Child =({greet,msg})=>{


    return <div>
            <h2>Child Component & Render Props</h2>
            {greet()}
            {msg()}
    </div>
}

export default Child;


//==========================Render Props 😉====================================
/*


( Render Props)
const Child =({greet,msg})=>{


    return <div>
            <h2>Child Component & Render Props</h2>
            {greet()}
            {msg()}
    </div>
}

export default Child;



=================================================================================



const Child =({greet,msg})=>{


    return <div>
            <h2>Child Component & Render Props</h2>
            {greet("Amrita Singh")}
            {msg()}
    </div>
}

export default Child;


===============================================================================

const Child =({greet,msg})=>{


    return <div>
            <h2>Child Component & Render Props</h2>
            {greet()}
            {msg()}
    </div>
}

export default Child;



=======================================================================



const Child =(props)=>{
console.log("props ",props);

const {greet,msg}=props


    return <div>
            <h2>Child Component & Render Props</h2>
            {greet()}
            {msg()}
    </div>
}

export default Child;

======================================================================



const Child =(props)=>{
console.log("props ",props);
    return <div>
            <h2>Child Component & Render Props</h2>
    </div>
}

export default Child;

*/

//==========================Default Props 😉====================================
/*



const Child =({message="Hello Developer ...💐" ,username="User"})=>{

return <div>
    <h1>Child Component</h1>
    <h3>Message : {message}</h3>
    <h3>Username : {username}</h3>

</div>
    
}
export default Child;


================================================================


const Child =(props)=>{

const {message} =props;
console.log("props ",props);

return <div>
    <h1>Child Component</h1>
    <h3>Message : {message}</h3>

</div>
    
}
export default Child;




*/