import React from "react";
import Single from "./singleNews";
import show from "./show.css";

class View extends React.Component {
  render() {
    return (
      <div className="content" style={show}>
        {this.props.data.map((el) => (
          <Single key={el.url} value={el} />
        ))}
      </div>
    );
  }
}

export default View;
