import React, { useState } from "react";
import styles from "./CreateNews.css";

const CreateNews = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imgPath, setImgPath] = useState("");

    function createNews(e) {
        e.preventDefault();
        const result = { title, content, urlToImage: imgPath };
        props.setNewNews(result);
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
