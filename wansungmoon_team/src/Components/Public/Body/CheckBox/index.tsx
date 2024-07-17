import { ChangeEvent } from "react";

interface IProps {
  id?: string;
  name?: string;
  value?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ name = "", value, id, onChange }: IProps): JSX.Element => {
  return value === undefined ? (
    <input
      type="checkbox"
      id={`${id !== undefined ? id : ""}`}
      name={name}
      onChange={onChange}
      value={value}
    />
  ) : (
    <input
      id={`${id !== undefined ? id : ""}`}
      type="checkbox"
      name={name}
      onChange={onChange}
    />
  );
};

export default CheckBox;
