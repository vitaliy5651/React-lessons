import Single from "./singleNews";
import { v4 as uuidv4 } from "uuid";
import show from "./show.css";
import { useState } from "react";

const View = (props) => {
    const [ flag ] = useState(false)

    return (
        <div className="content" style={show}>
            {props.data.map((el) => (
                <Single key={uuidv4("")} value={el} flag = {props.data.length === 1 ? !flag : flag} />
            ))}
        </div>
    );
};

export default View;
