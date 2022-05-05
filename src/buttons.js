import React, { useState } from "react";
import btnStyle from "./button.css";
import CreateNews from "./CreateNews/CreateNews";
import View from "./view/showNews";

const Buttons = (props) => {
const [news, setNews] = useState(props.info);
const [flag, setFlag] = useState(true);

function searchNews(event) {
    const searchNew = event.target.value;
    const newFilter = [...news].filter((value) => {
    return value.title.toLowerCase().includes(searchNew.toLowerCase());
    });
    if (newFilter.length === 0) {
    setNews(props.info);
    } else {
    setNews(newFilter);
    }
}

return (
    <div className="btn_news" style={btnStyle}>
    <h1>News</h1>
    <CreateNews
        setNewNews={(value) => {
        setNews([value,...news]);
        }}
    />
    <div className="nav">
        <button 
        className="view_news"
        onClick={() => {
            setFlag(!flag);
        }}
        >
        View all
        </button>
        <button
        className="reverse_news"
        onClick={() => {
            setNews([...news].reverse());
        }}
        >
        Change news
        </button>
        <button
        className="home"
        onClick={() => {
            setNews(props.info);
        }}
        >
        Home
        </button>
    </div>
    <input
        className="input"
        type="text"
        placeholder="Input News"
        onChange={searchNews}  >
        </input>
    <View data={flag ? [news[0]] : news} />
    </div>
);
};

export default Buttons;
