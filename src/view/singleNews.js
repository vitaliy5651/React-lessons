import React, { useState } from "react";
import styles from "./show.css";

const Single = (props) => {
    const [flag, setFlag] = useState(props.flag);
    const [index] = useState(props.value);

    console.log(props.flag)
    return (
        <div className="news_content" style={styles}>
            <div className="current_image">
                <img alt="img" src={index.urlToImage} />
            </div>
            <div className="current_title">{index.title}</div>
            {flag && <div className="current_description">{index.content}</div>}
            <button
                className="view_btn"
                onClick={() => {
                    setFlag(!flag);
                }}
            >
                View more
            </button>
        </div>
    );
};

export default Single;
