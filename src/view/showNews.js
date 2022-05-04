import React from "react";
import Single from "./singleNews";
import show from './show.css'

const View = (props) => {

            return (
            <div className="content" style={show}>
            {props.data.map((el) => <Single key={el.url} value = {el}/>)}
            </div>
        )
}

export default View