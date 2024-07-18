import { ChangeEvent } from "react";
import InputText from "./InputText";
interface IProps {
  title: string;
  value?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = ({
  title,
  value,
  name = "",
  id,
  onInput,
}: IProps): JSX.Element => {
  return (
    <div className="w-full">
      <div className="p-1 pb-0 text-sm font-bold">{title}</div>
      <div>
        <InputText
          id={id}
          name={name}
          placeholder={title}
          onInput={onInput}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputBox;
