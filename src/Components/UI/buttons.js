import React, { useState } from "react";
import btnStyle from "./button.css";
import CreateNews from "../CreateNews/CreateNews";
import ShowNews from "../ShowNews/showNews";
import { useDispatch, useSelector } from "react-redux";

const Buttons = () => {
    const [flag, setFlag] = useState(true);
    const dispatch = useDispatch()
    const stateNews = useSelector(state => state.fetchNewsReducer)
    function searchNews(event) {
        const searchNew = event.target.value;
            dispatch({type: 'Success_Search', searchNew});
    }

    return (
        <div className="btn_news" style={btnStyle}>
            <h1>News</h1>
            <CreateNews />
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
                        dispatch({type: 'Reverse_News' , result: stateNews.news})
                    }}
                >
                    Reverse news
                </button>
                <button
                    className="home"
                    onClick={() => {
                        dispatch({type: 'Return_initialState'})
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
            <ShowNews data={flag ? [stateNews.news[0]] : stateNews.news} />
        </div>
    );
};

export default Buttons;
