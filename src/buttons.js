import React from 'react';

class Buttons extends React.Component{

render(){
    return(
        <div className='btn_news'>
            <button className='View all news' onClick={() =>{}}>1</button>
            <button className='Change' onClick={() => this.props.info.reverse()}>Change news</button>
            <button onClick={() =>{}}>3</button>
        </div>
    )
}
}

export default Buttons