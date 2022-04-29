import React from 'react';

class Histories extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='histories'>History of click: {this.props.getValue.join('')} </div>
        )
    }
}

export default Histories