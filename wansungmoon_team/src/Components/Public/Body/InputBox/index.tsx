import { ChangeEvent } from "react";
import InputText from "./InputText";
interface IProps {
  title: string;
  value?: string;
  name?: string;
  placeholder?: string;
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputTextBox = ({
  title,
  value,
  name = "",
  placeholder,
  onInput,
}: IProps): JSX.Element => {
  return (
    <div>
      <div className="p-1 pb-0 text-sm font-bold">{title}</div>
      <div>
        <InputText
          name={name}
          placeholder={placeholder}
          onInput={onInput}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputTextBox;
