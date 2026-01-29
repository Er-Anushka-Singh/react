import Employ from "./Employ";

    const Props = () =>{
        const user ={
         userName :"Tinku" ,
        skill : ["frontend", "Backend"] ,
         designation : "SDE-2",
         salary: "12.5 LPA"
        }
    
return (
    <>
    {/* <Employ user= {user}/> */}
    <Employ  {...user}/>
    </>
);
};


export default Props;



/*


import Employ from "./Employ";

    const Props = () =>{
        const user ={
         userName :"Tinku" ,
        skill : ["frontend", "Backend"] ,
         designation : "SDE-2",
         salary: "12.5 LPA"
        }
    
return (
    <>
    {/* <Employ user= {user}/> }
    <Employ  {...user}/>
    </>
);
};


export default Props;







import List from "./List";
const Props =()=>{
    const user1 ={
        a:10, 
        user : "Tinku",
        msg:"Good Morning"

    }
return (
    <>
    <List {...user1}/>
    </>
);

};




import List from "./List";
const Props =()=>{
    const user="Tinku";
return <h1>Hello from Props</h1>

return <>
    <List a={10}  user={user} msg="Good Morning"/>
</>
}

export default Props;
*/