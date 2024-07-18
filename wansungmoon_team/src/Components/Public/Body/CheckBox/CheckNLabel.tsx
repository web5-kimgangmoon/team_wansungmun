import { ChangeEvent } from "react";
import CheckBox from ".";
import ClickButton from "../ClickButton";

interface IProps {
  id?: string;
  name?: string;
  value?: boolean;
  laTitle: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckNLabel = ({
  id = "checkBox",
  name,
  value,
  laTitle,
  onChange,
}: IProps): JSX.Element => {
  return (
    <div className="w-full py-1 text-sm font-bold">
      <div className="pb-1">{laTitle}</div>
      <div className="flex gap-1">
        <CheckBox id={id} name={name} value={value} onChange={onChange} />
        <div>
          <ClickButton bgColor="blue" textColor="white">
            <label htmlFor={id}> {laTitle} </label>
          </ClickButton>
        </div>
      </div>
    </div>
  );
};

export default CheckNLabel;
