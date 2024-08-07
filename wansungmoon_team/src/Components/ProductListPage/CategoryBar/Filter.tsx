import { ChangeEvent } from "react";

interface IProps {
  isDirectCheck: boolean;
  setIsDirectCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ isDirectCheck, setIsDirectCheck }: IProps) => {
  return (
    <div className="flex gap-3 pl-3 pt-2">
      <input type="checkbox" checked={isDirectCheck} onChange={setIsDirectCheck} />
      <div className="text-sm">직거래 가능</div>
    </div>
  );
};

export default Filter;
