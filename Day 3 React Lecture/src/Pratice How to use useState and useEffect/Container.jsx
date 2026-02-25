
import {useState, useEffect} from "react";
import Card from "./Card";

function Container(){
        const [allProduct , setAllProduct]=useState([]);
        const [displayProduct , setDiaplayProduct]=useState([]);

    useEffect(()=>{
            getProduct();
    },[])
    
    const getProduct= async()=>{
                try{
                    const list = await fetch("https://api.theindianhome.in/api/product/list");
                    if(!list.ok)
                        throw new Error("Something Went wrong");
                        
                    const data = await list.json();
                    setAllProduct(data.products);
                }catch(error ){
                    console.log("Error ",error);
                }

    };

   

    return (
       <div>
            <button>Top Rated</button>
             <button>High To Low</button>
              <button>Low To High
              </button>
              <div>{...allProduct}</div>
              <div>{
              displayProduct.map((product)=>(
               <Card key={product._id} {...product} />))
 } </div>
       </div>
    )
}

export default Container;