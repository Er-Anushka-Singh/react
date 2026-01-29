import "../index.css"
const Button =({text,handleClick}) =>{

   
    return <button className="btu" onClick={handleClick}>   
        {text}
    </button>
}

export default Button;

/*
import "../index.css"
const Button =(props) =>{

    console.log("props ",props);
    return <button className="btu" onClick={props.fn}>
        {props.text}
    </button>
}

export default Button;


*/