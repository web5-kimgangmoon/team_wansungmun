import { ChangeEvent } from "react";
import InputText from "./InputText";
interface IProps {
  title: string;
  value?: string;
  name?: string;
  onInput?: (e: ChangeEvent<HTMLInputElement>) => {};
}

const InputBox = ({
  title,
  value,
  name = "",
  onInput,
}: IProps): JSX.Element => {
  return (
    <div className="w-full">
      <div className="p-1 pb-0 text-sm font-bold">{title}</div>
      <div>
        <InputText
          name={name}
          placeholder={sort}
          onInput={onInput}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputBox;
