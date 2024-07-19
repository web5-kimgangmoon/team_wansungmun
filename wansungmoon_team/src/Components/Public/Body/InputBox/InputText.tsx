import { ChangeEvent } from "react";

interface IProps {
  placeholder?: string;
  value?: string;
  name?: string;
  id?: string;
  type?: string;
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({
  placeholder = "",
  value,
  id = "",
  name = "",
  type = "text",
  onInput,
}: IProps): JSX.Element => {
  return value !== undefined ? (
    <div className="py-1">
      <input
        id={id}
        name={name}
        type={`${type}`}
        placeholder={placeholder}
        onInput={onInput}
        className="placeholder:text-sm placeholder:font-bold text-sm p-1 w-full border border-cusGray rounded-md outline-none"
      />
    </div>
  ) : (
    <div className="py-1">
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        onInput={onInput}
        className="placeholder:text-sm placeholder:font-bold text-sm p-1 w-full border border-cusGray rounded-md outline-none"
        value={value}
      />
    </div>
  );
};

export default InputText;
