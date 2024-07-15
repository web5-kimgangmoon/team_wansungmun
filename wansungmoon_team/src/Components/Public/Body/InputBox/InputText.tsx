import { ChangeEvent } from "react";

interface IProps {
  placeholder?: string;
  value?: string;
  name?: string;
  onInput?: (e: ChangeEvent<HTMLInputElement>) => {};
}

const InputText = ({
  placeholder = "",
  value,
  name = "",
  onInput,
}: IProps): JSX.Element => {
  return value !== undefined ? (
    <div className="py-1">
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        onInput={onInput}
        className="placeholder:text-sm placeholder:font-bold text-sm p-1 w-full border border-cusGray rounded-md outline-none"
      />
    </div>
  ) : (
    <div className="py-1">
      <input
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
