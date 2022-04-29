import React from 'react';
import Histories from './history';

class Buttons extends React.Component{
constructor(){
    super()
    this.state = {
        id: []
    }
}

handleClick = (value) => {
    const historyClick = [...this.state.id]
    if(historyClick.length >= 3){
        historyClick.shift()
    }
    historyClick.push(value)
    this.setState({id: historyClick})
}

render(){
    return(
        <div className='wrapper'>
        <div className='btn'>
            <button onClick={() =>this.handleClick(1)}>1</button>
            <button onClick={() =>this.handleClick(2)}>2</button>
            <button onClick={() =>this.handleClick(3)}>3</button>
            <button onClick={() =>this.handleClick(4)}>4</button>
            <button onClick={() =>this.handleClick(5)}>5</button>
        </div>
        <Histories getValue = {this.state.id} ></Histories>
        </div>
    )
}
}

export default Buttons