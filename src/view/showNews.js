import React from "react";
import Single from "./singleNews";
import show from './show.css'
import Buttons from "../buttons";

class View extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            value : this.props.data
        }
    }

    render(){
        //let copyData = this.props.data.map((el) => {return el})
            return (
            <div className="content" style={show}>
            <div className="nav_list">
            <h1>News</h1>
            <Buttons info = {this.props.data}/>
            </div>
            {this.props.data.map((el) => <Single key={el.url} value = {el}/>)}
            </div>
        )
    }
}

export default View