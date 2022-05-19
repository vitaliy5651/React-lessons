import React from "react";

interface ICartButtons {
    className: string
}
const CartButtons: React.FC<ICartButtons> = ({className}) => {

    return(
        <button className={className}>+/-</button>
    )
}

export default CartButtons