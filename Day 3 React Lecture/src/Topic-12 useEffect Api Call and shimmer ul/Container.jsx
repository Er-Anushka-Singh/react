
import {useState,useEffect} from 'react'
import Shimmer from "./Shimmer";
import Card from "./Card"
import "./style.css"

const Container = () => {
    const [response,setResponse] = useState([]);  
    const [displayProduct,setDisplayProduct]= useState([]);
    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = async () => {
       try {
             const list = await fetch("https://api.theindianhome.in/api/product/list");
            
             // console.log("list:",list);  response object = { headers: {}, body: readableStream, status: 200, ok: true}
             if(!list.ok)
                 throw new Error("Something went wrong");

            const data = await list.json();  // {success: true, products: 18 []}
            
            setResponse(data.products)
            setDisplayProduct(data.products)
       } catch (error) {
            console.log("Error:",error);
       }
    }

    const handleClick = () => {
        const filteredCrafts = response.filter(element => element.rating === 5)
        setResponse(filteredCrafts);
    }

    const highToLow=()=>{
      const sortedList =[...response].sort((e1,e2)=>e2.price -e1.price);
      setResponse(sortedList);
    }

     const lowToHigh=()=>{
      const sortedList =[...response].sort((e1,e2)=>e1.price -e2.price);
      setResponse(sortedList);
    }

    const resetAll=()=>{


    }
        
    
  return (response.length === 0)? <Shimmer/> :(
            <div >
                <div className="top-banner">
                    <button onClick={handleClick}>Top Rated Crafts</button>
                </div>
                <div className="top-banner">
                    <button onClick={lowToHigh}>Low To High</button>
                </div>
                <div className="top-banner">
                    <button onClick={highToLow}>High To Low</button>
                </div>
                <div className="top-banner">
                    <button onClick={resetAll}>Reset All</button>
                </div>

               <div className="card-container">
                     {
                        response.map((element,index)=> <Card key={element._id} {...element}/>)            
                    }
               </div>
            </div>  )
}

export default Container


/**
 * element = {
 *  id:
 *  description:,
 *  price:
 *  ratings:
 *  category:
 *  image: []
 * 
 * }
 */



/*
import {useState,useEffect} from 'react'
import Shimmer from "./Shimmer";

function Container() {

    const [response , setResponse]=useState([]);

    useEffect(()=>{

    })
    const getUser = async()=>{
       const response= await fetch(" http://jsonplaceholder.typicode.com");
       const data = await response.json();
       console.log("data",data);
       setResponse(data);
    }

    if(response.length===0)
    {
        return<Shimmer/>
    }
  return (
    <div>
      {
        response.map(element => <Card {...element}/>
        )
      }
    </div>
  )
}

export default Container

*/
