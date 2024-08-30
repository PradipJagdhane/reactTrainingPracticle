import React from 'react';


function objprops(props){
    const{name, age, email} = props.user;
    return(
        <div>
            <h1>Name:{name}</h1>
            <h1>Age: {age}</h1>
            <h1>Email: {email}</h1>
        </div>
    )
    } 

    

// const Argument = (props) =>{

//     return(
//         <div>
//             <h1>This is props{props.name}</h1>
            
//         </div>
//     )
// }




export default objprops;