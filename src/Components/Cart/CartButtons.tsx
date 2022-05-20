import React from "react";

interface ICartButtons {
    className: string
    value: string
    onClick: () => void
}
const CartButtons: React.FC<ICartButtons> = ({className, value, onClick}) => {

    return(
        <button className={className} onClick = {onClick}>{value}</button>
    )
}

export default CartButtons