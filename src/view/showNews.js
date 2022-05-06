import Single from "./singleNews";
import { v4 as uuidv4 } from "uuid";

import show from "./show.css";

const View = (props) => {
  return (
    <div className="content" style={show}>
      {props.data.map((el) => (
        <Single key={uuidv4("")} value={el} />
      ))}
    </div>
  );
};

export default View;
