import React, { useContext } from "react";
import { GlobalInfo } from "./Hooks/Usecontext/Ex2/createContext";

const SuperChild = () =>{
    const {appColor, getDay} = useContext(GlobalInfo);
    const day = "Sunday";

    console.log("appcolor from parent", appColor)
    return(
        <div>
            <h1 style={{color:appColor}}>Super Child Component{appColor}</h1>
            <button onClick={() => getDay(day)}>Click me</button>
        </div>
        
    )
}

export default SuperChild;