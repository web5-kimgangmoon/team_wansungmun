import { ChangeEvent } from "react";
import CheckBox from ".";

interface IProps {
  id?: string;
  name?: string;
  value?: boolean;
  laTitle: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckNLabel = ({
  id,
  name,
  value,
  laTitle,
  onChange,
}: IProps): JSX.Element => {
  return (
    <div className="py-1 text-sm font-bold flex gap-1">
      <CheckBox id={id} name={name} value={value} onChange={onChange} />
      <div>
        <label htmlFor={id}>{laTitle}</label>
      </div>
    </div>
  );
};

export default CheckNLabel;
