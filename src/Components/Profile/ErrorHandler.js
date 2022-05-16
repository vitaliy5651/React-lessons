import React, { useMemo } from "react"

const ErrorHandler = ({cartNumber}) => {
    
    const getWarning = useMemo( () => {
        if(cartNumber.length < 16){
            return 'Введено меньше символов' 
        }else if(cartNumber.length > 16){
            return 'Введено больше символов'
        }else{
            return 'Введено правильно'
        }
    }, [cartNumber])
return(
    <div className="err_input">{getWarning}</div>
)

}

export default React.memo(ErrorHandler, (prevState, nextState) => {
    switch(nextState.cartNumber.length){
        case 1 && 15:
            return false
        case 16:
            return false
        case 17:
            return false
        default:
            return true
    }
})