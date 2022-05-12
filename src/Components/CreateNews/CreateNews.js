import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./CreateNews.css";

const CreateNews = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imgPath, setImgPath] = useState("");

    const dispatch = useDispatch()
    function createNews(e) {
        e.preventDefault();
        const result = { title, content, urlToImage: imgPath };
        dispatch({type: 'ADD_NEW', result})
    }

    return (
        <div className="PostNews" style={styles}>
            <form className="create_new">
                <input
                    className="input"
                    type="text"
                    placeholder="Input title of news"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    value={content}
                    className="input"
                    type="text"
                    placeholder="Input description of news"
                    onChange={(e) => setContent(e.target.value)}
                />
                <input
                    value={imgPath}
                    className="input"
                    type="text"
                    placeholder="Insert image link"
                    onChange={(e) => setImgPath(e.target.value)}
                ></input>
                <button className="btn_submit" onClick={createNews}>
                    Submit
                </button>
            </form>
        </div>
    );
};




export default CreateNews;
