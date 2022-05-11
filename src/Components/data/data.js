import React, { useEffect } from "react";
import Buttons from "../UI/buttons";
import styles from "./data.css";
import store from "../../store";
import { useSelector } from "react-redux";


const Data = () => {

    const newStore = useSelector((state) => state.fetchNewsReducer)
    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/everything?q=apple&from=2022-04-27&to=2022-04-27&sortBy=popularity&apiKey=7c847bba61dd4639a231e5a60c4986a7"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    
                    store.dispatch({type: 'fetch_success', promise: result.articles})
                },
                (error) => {
                    store.dispatch({type: 'fetch_error', error})
                }
            );
    }, []);

    newStore.error && <div>Ошибка: {newStore.error.message}</div>;
    if (!newStore.isLoaded) {
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
                <Buttons info={newStore.news} />
            </div>
        );
    }
};

export default Data
