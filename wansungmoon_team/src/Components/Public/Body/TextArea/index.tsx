import TextareaComp from "./comp";
import { ChangeEvent } from "react";
interface IProps {
  value?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const TextArea = ({
  value,
  name,
  rows,
  placeholder,
  onChange,
}: IProps): JSX.Element => {
  let onChangeAll: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  if (onChange) {
    onChangeAll = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target.scrollHeight > e.target.offsetHeight) {
        e.target.style.height = `${e.target.scrollHeight}px`;
      }
      onChange(e);
    };
  } else {
    onChangeAll = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target.scrollHeight > e.target.offsetHeight) {
        e.target.style.height = `${e.target.scrollHeight}px`;
      }
    };
  }

  return (
    <TextareaComp
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChangeAll}
      rows={rows}
    />
  );
};

export default TextArea;
