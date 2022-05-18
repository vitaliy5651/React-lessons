import React from "react";

interface IProfileInput{
  name: string,
  surname: string,
  cartNumber: string,
  setValue: () => void
}
const InputProfile: React.FC<IProfileInput> = ({setValue}: IProfileInput) => {
  return (
      <>
    <input
      className="input"
      type="text"
      onChange={(e: React.ChangeEvent) => {
        setValue(() => e.target.value);
      }}
    />
    </>
  );
};

export default React.memo(InputProfile);
