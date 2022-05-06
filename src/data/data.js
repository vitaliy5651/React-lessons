import React, { useEffect, useState } from "react";
import Buttons from "../buttons";

import styles from "./data.css";

const Data = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/everything?q=apple&from=2022-04-27&to=2022-04-27&sortBy=popularity&apiKey=7c847bba61dd4639a231e5a60c4986a7"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setNews(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    error && <div>Ошибка: {error.message}</div>;
    if (!isLoaded) {
        return (
            <div className="cssloader" style={styles}>
                <div className="sh1"></div>
                <div className="sh2"></div>
                <h4 className="lt">loading</h4>
            </div>
        );
    } else {
        return (
            <div className="wrapper" style={styles}>
                <Buttons info={news.articles} />
            </div>
        );
    }
};

export default Data;
