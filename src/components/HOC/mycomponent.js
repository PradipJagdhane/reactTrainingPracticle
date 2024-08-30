import React from "react";
import withLogger from '../HOC/higherOrderC';

const MyComponent = () =>{
    return <div>Hello, World!!</div>
};

export default withLogger(MyComponent);