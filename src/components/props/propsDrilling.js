import React from "react";



const PropDrilling = (props) =>{
    return(
        <div>
            <h1>Props Drilling</h1>
            <ComponentA user= {props.user}/>
        </div>
    )
}


function ComponentA(props){
    return(
        <>
         <ComponentB user={props.user} />
        </>
    )
}

function ComponentB(props){
    return(
        <>
        <table>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>email</th>
            </tr>
          <tr>
            <td>{props.user.name}</td>
            <td>{props.user.age}</td>
            <td>{props.user.email}</td>
          </tr>
            
        </table>
        </>
    )
}

export default PropDrilling;