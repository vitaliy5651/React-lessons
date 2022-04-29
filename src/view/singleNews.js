//import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import styles from './show.css'

class Single extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            flag:  true,
            index: this.props.value
        }
    }
    render(){
        return (
            <div className='news_content' style={styles}>
                <div className='current_image'>
                <img alt='img' src={this.state.index.urlToImage} />
                </div>
                <div className='current_title'>{this.state.index.title}</div>
                {this.state.flag && <div className='current_description'>{this.state.index.content}</div>}
                <button className='view_btn' onClick={() => {this.setState((state)=>({flag: !state.flag}))}}>View more</button>
            </div>
        )
    }
}

export default Single