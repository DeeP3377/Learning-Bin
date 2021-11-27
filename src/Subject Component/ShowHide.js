import React, { Component } from "react";
export default class ShowHide extends Component{
    constructor(props){
        super(props);
        this.state={
            value:false
        }
        Show(
            this.setState({
                value: true;
            })
        )
    }
}