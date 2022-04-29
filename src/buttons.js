import React from 'react';
import btnStyle from './button.css'
import View from './view/showNews';

class Buttons extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            flag: true,
            value: '',
            news: this.props.info
        }
    }
    searchNews = (event) => {
        const searchNew = event.target.value
        const newFilter = [...this.state.news].filter((value) => {
            return value.title.toLowerCase().includes(searchNew.toLowerCase())
        })
        if (searchNew === '') {
            this.setState(this.state)
        } else {
            this.setState({news: newFilter})
        }
        console.log(this.state.news)
    }
render(){
    return(
        <div className='btn_news' style={btnStyle}>
            <div className='nav'>
            <button className='view_news' onClick={() =>{this.setState((state) => ({flag: !state.flag}))}}>View all</button>
            <button className='reverse_news' onClick={() =>{this.setState((state) => ({news: state.news.reverse()}))}}>Change news</button>
            </div>
            <input className='input'  type = 'text' placeholder='Input News' onChange={this.searchNews}></input>
            <View data = {this.state.flag ? [this.props.info[0]] : this.props.info} />
        </div>
    )
}
}

export default Buttons
