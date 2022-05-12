import { v4 as uuidv4 } from "uuid";
import show from "./show.css";
import { useState } from "react";


const ShowNews = (props) => {
    const [flag, setFlag] = useState(true);

    return (
        <div className="content" style={show}>
            {props.data.map((el) => (
                <div className="news_content" key={uuidv4('')}>
            <div className="current_image">
                <img alt="img" src={el.urlToImage} />
            </div>
            <div className="current_title">{el.title}</div>
            {flag && <div className="current_description">{el.content}</div>}
            <button
                className="view_btn"
                onClick={() => {
                    setFlag(!flag);
                }}
            >
                View more
            </button>
        </div>
            ))}
        </div>
    );
};

export default ShowNews;
