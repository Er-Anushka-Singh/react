const Child =(props)=>{

const {person} =props;
person.age=28;
console.log("person ",person);

return <div>
    <h1>Child Component {person.age}</h1>
    
</div>
    
}
export default Child;

// It can be mutable but react recommended to make immutable to secure the rule .