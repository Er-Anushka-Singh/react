const List =(props)=>{
    console.log("props ",props)
    const {a,user,msg} = props;
    return <>
        <h2>a:{a}</h2>
        <h2>UserName:{user}</h2>
        <h2>Msg:{msg}</h2>
    </>
}
export default List;

/*

const List =(props)=>{
    console.log("props ",props)
    return <>
        <h2>a:{props.a}</h2>
        <h2>UserName:{props.user}</h2>
        <h2>Msg:{props.msg}</h2>
    </>
}
export default List;
*/