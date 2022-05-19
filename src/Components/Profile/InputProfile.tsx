import React from "react";

interface IProfileInput{
  placeholder: string,
  setValue: (e: any) => void
}
const InputProfile: React.FC<IProfileInput> = ({setValue, placeholder}: IProfileInput) => {
  return (
      <>
    <input
      placeholder={placeholder}
      className="input"
      type="text"
      onChange={(e: any) => {
        setValue(e.target.value);
      }}
    />
    </>
  );
};

export default React.memo(InputProfile);
