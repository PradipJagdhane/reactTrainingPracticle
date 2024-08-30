import React, { useEffect } from 'react';

const withLogger = (WrappedComponent) =>{
    return(props) => {
        useEffect(() => {
            console.log(`Component ${WrappedComponent.name} mounted`);
        },[]);

        return <WrappedComponent {...props}/>
    }
}

export default withLogger;