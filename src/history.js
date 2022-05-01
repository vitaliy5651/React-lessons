import React from 'react';

class Histories extends React.Component{

    render(){
        return(
            <div className='histories'>History of click: {this.props.getValue.join('')} </div>
        )
    }
}

export default Histories