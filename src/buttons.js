import React from 'react';
import btnStyle from './button.css'
import View from './view/showNews';

class Buttons extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            flag: true,
            news: this.props.info
        }
    }
    searchNews = (event) => {
        const searchNew = event.target.value
        const newFilter = [...this.state.news].filter((value) => 
        {return value.title.toLowerCase().includes(searchNew.toLowerCase())})
        if (newFilter.length === 0) {
            this.setState({news: this.props.info})
        } else {
            this.setState({news: newFilter})
        }
    }
render(){
    return(
        <div className='btn_news' style={btnStyle}>
            <h1>News</h1>
            <div className='nav'>
            <button 
            className='view_news' 
            onClick={() =>{
                this.setState((state) => 
                ({flag: !state.flag}))}
                }>
                View all
                </button>
            <button 
            className='reverse_news' 
            onClick={() => {
                this.setState((state) => 
                ({news: state.news.reverse()}))}
                }>
                Change news
                </button>
            <button 
            className='home' 
            onClick={() => 
            {this.setState({news: this.props.info})}
            }>
            Home
            </button>
            </div>
            <input 
            className='input'  
            type = 'text' 
            placeholder='Input News' 
            onChange={this.searchNews}>
            </input>
            <View data = {this.state.flag ? [this.state.news[0]] : this.state.news} />
        </div>
    )
}
}

export default Buttons
