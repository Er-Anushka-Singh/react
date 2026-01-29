// Render Props  ---> if a function pass the props  the jsx code (return ) called.

import Child from "./Child";
const Parent =()=>{

        const greet =(user="Dear") => <h3>Hello {user}...!</h3>
        const msg =() => "Namaste Dev"

    return <div>
            <h1> Parent Component && Render Props</h1>
            <Child greet ={greet} msg={msg}/>
    </div>
}

export default Parent;


/*

 Render Props  ---> if a function pass the props  the jsx code (return ) called.

import Child from "./Child";
const Parent =()=>{

        const greet =(user="Dear") => <h3>Hello {user}...!</h3>
        const msg =() => "Namaste Dev"

    return <div>
            <h1> Parent Component && Render Props</h1>
            <Child greet ={greet} msg={msg}/>
    </div>
}

export default Parent;






import Child from "./Child";
const Parent =()=>{

        const greet =(user) => <h3>Hello {user}...!</h3>
        const msg =() => "Namaste Dev"

    return <div>
            <h1> Parent Component && Render Props</h1>
            <Child greet ={greet} msg={msg}/>
    </div>
}

export default Parent;






import Child from "./Child";
const Parent =()=>{

        const greet =() => <h3>Hello developer !</h3>
        const msg =() => "Namaste Dev"

    return <div>
            <h1> Parent Component && Render Props</h1>
            <Child greet ={greet} msg={msg}/>
    </div>
}

export default Parent;






import Child from "./Child";
const Parent =()=>{

        const greet =() => <h3>Hello developer !</h3>


    return <div>
            <h1> Parent Component && Render Props</h1>
            <Child greet ={greet}/>
    </div>
}

export default Parent;

*/

/*
Default Props😉



import Child from "./Child"; 

const Parent =()=>{

   const msg = "Namaste Developers...🙏";
   const username ="Tinku";

return <div>
    <h1>Parent Component</h1>
    {/* <Child message={msg} username={username}/> }
    <Child/>
</div>


}
export default Parent;







*/