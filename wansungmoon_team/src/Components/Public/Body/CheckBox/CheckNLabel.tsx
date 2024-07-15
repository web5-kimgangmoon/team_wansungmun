import { ChangeEvent } from "react";
import CheckBox from ".";

interface IProps {
  id?: string;
  name?: string;
  value?: boolean;
  children: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => {};
}

const CheckNLabel = ({
  id,
  name,
  value,
  children,
  onChange,
}: IProps): JSX.Element => {
  return (
    <div className="w-full py-1 text-sm font-bold flex gap-1">
      <CheckBox id={id} name={name} value={value} onChange={onChange} />
      <div>{children}</div>
    </div>
  );
};

export default CheckNLabel;
