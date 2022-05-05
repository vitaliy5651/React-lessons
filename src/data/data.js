import React from "react";
import Buttons from "../buttons";

import styles from "./data.css";

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      news: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2022-04-27&to=2022-04-27&sortBy=popularity&apiKey=7c847bba61dd4639a231e5a60c4986a7"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            news: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, news } = this.state;
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
  }
}
export default Data;
