import React, { useContext } from "react";
import { GlobalInfo } from "./createContext";
import SuperChild from "../../../Superchild";

const Child = () =>{
    const {appColor} = useContext(GlobalInfo);
    console.log("appcolor from parent", appColor)
    return(
        <div>
            <h1 style={{color:appColor}}>Child Component{appColor}</h1>
            <SuperChild /> 
        </div>
        
    )
}

export default Child;