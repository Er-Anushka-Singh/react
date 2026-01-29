
import Button from "./Button";

const Parent =() =>{

    const handleClick= (e)=>{
      //  console.log("Clicked...!",e);
      const h1 = document.querySelector("h1");
      h1.textContent="Namaste Developer";
      h1.style.color="red";
    }

    return <div>
        <h1>Hello Developer!..</h1>
        {/* <button style={{padding:"8px 25px",backgroundColor:"black",color:"white",color:"white",
        border:"none",

        }}>Click</button> */}

        {/* <button className="btn" onClick={handleClick}>Click</button> */}


        <Button text="start" handleClick={handleClick}/>
    </div>
}

export default Parent;



/*
import "../index.css"

const Parent =() =>{

    const handleClick= (e)=>{
        console.log("Clicked...!",e);
      const h1 = document.querySelector("h1");
      h1.textContent="Namaste Developer";
      h1.style.color="red";
    }

    return <div>
        <h1>Hello Developer!..</h1>
        {/* <button style={{padding:"8px 25px",backgroundColor:"black",color:"white",color:"white",
        border:"none",

        }}>Click</button> }

        <button className="btn" onClick={handleClick}>Click</button>
    </div>
}

export default Parent;

*/