import { ChangeEvent } from "react";
import CategoryBar from "./CategoryBar";
import Filter from "./Filter";

interface IProps {
  isDirectCheck: boolean;

  category: string;
  setIsDirectCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CateBar = ({ isDirectCheck, category, setIsDirectCheck }: IProps) => {
  return (
    <div>
      <CategoryBar category={category}></CategoryBar>
      <Filter isDirectCheck={isDirectCheck} setIsDirectCheck={setIsDirectCheck}></Filter>
    </div>
  );
};

export default CateBar;
