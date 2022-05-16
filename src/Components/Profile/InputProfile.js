import React from "react";
import ErrorHandler from "./ErrorHandler";

const InputProfile = ({ isName, isSurname, isCartNumber, name, surname, cartNumber, setValue }) => {
  console.log('render')
  return (
      <>
    <input
      className="input"
      type="text"
      placeholder={
        (isName && "Введите новое имя") ||
        (isSurname && "Введите новую фамилию") ||
        (isCartNumber && "Введите другие данные карты")
      }
      onChange={(e) => {
        setValue(() => e.target.value);
      }}
    />
    {cartNumber && <ErrorHandler cartNumber={cartNumber} />}
    </>
  );
};

export default React.memo(InputProfile);
