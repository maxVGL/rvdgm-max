function Nodes({type, value}) {
    let arr = [];
    for ( let i = 0; i < value; i++ ) {
        arr.push(
            <img alt="" key={i} src={type} />
        );
    }
    return <div> {arr} </div>;
}

export default Nodes;