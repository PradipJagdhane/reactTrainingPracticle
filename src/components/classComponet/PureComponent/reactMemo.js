import React, { memo, useState } from "react";

const ChildComponent = memo(({name}) =>{
    console.log("ChildCompoent rendered");
    return <div>Hello, {name}</div>
});

const ParentComponent = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Pradip");

    return(
        <div>
            <button onClick={() => setCounter(counter + 1)}> increament Counter</button>
        <button onClick={() => setName("Adarsh")}> Change name</button>
        <p>Counter:{counter}</p>
        <ChildComponent name={name}/>
        </div> 
    )
}

export default ParentComponent;