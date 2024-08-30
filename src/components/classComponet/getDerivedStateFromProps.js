// The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.



import React, { Component } from "react";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }

    static getDerivedStateFromProps(props, state){
        if (props.favcol !== state.favoritecolor) {
            return {favoritecolor: props.favcol};
        }
        return null;
    }

    render(){
        return(
            <h1>My favorite color is a{this.state.favoritecolor}</h1>
        )
    }
}

export default Header;