import React from "react";


interface IBtnFilter{
    value: string,
    onClick: () => void
}
const ButtonsFilter: React.FC<IBtnFilter> = ({value, onClick}) =>{
return (
    <button className="Filter_btn" onClick={onClick}>{value}</button>
)
}

export default ButtonsFilter