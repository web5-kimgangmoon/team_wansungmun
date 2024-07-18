import { MouseEvent } from "react";

interface IProps {
  textColor: "white" | "black";
  bgColor: "blue" | "gray" | "red" | "green" | "white";
  isBorder?: boolean;
  children: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const SearchVoca = ({
  textColor,
  bgColor,
  children,
  isBorder = false,
  onClick,
}: IProps): JSX.Element => {
  const textColorStorage = {
    black: " text-black",
    white: " text-white",
  };
  const bgColorStorage = {
    blue: " bg-blueButton-long",
    gray: " bg-cusGray",
    red: " bg-redButton",
    green: " bg-greenButton",
    white: "bg-white",
  };
  return (
    <div className="w-[5rem] h-[2rem] border rounded-3xl justify-between flex p-1">
      <div>{children}</div>
      <div>X</div>
    </div>
  );
};

export default SearchVoca;
