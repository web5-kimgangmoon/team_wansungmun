import { ChangeEvent } from "react";

interface IProps {
  id?: string;
  name?: string;
  value?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ name = "", value, id, onChange }: IProps): JSX.Element => {
  const className = "p-4";
  return value === undefined ? (
    <input
      className={className}
      type="checkbox"
      id={`${id !== undefined ? id : ""}`}
      name={name}
      onChange={onChange}
      value={value}
    />
  ) : (
    <input
      className={className}
      id={`${id !== undefined ? id : ""}`}
      type="checkbox"
      name={name}
      onChange={onChange}
    />
  );
};

export default CheckBox;
