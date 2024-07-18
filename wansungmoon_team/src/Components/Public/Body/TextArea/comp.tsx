import { ChangeEvent, SyntheticEvent } from "react";

interface IProps {
  value?: string;
  rows?: number;
  name?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({
  value,
  name = "",
  placeholder = "",
  rows = 1,
  onChange,
}: IProps): JSX.Element => {
  return (
    <textarea
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      rows={rows}
      className="w-full px-1 py-2 bg-cusGray outline-none resize-none whitespace-pre-wrap text-sm rounded-md"
    />
  );
};

export default TextArea;
