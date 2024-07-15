import { MouseEvent } from "react";

interface IProps {
  textColor: "white" | "black";
  bgColor: "blue" | "gray" | "red" | "green" | "orange" | "yellow";
  children: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => {};
}
const Button = ({
  textColor,
  bgColor,
  children,
  onClick,
}: IProps): JSX.Element => {
  const textColorStorage = {
    black: " text-black",
    white: " text-white",
  };
  const bgColorStorage = {
    blue: " bg-blueButton-default",
    gray: " bg-cusGray",
    red: " bg-redButton",
    green: " bg-greenButton",
    orange: " bg-orangeButton",
    yellow: " bg-yellow",
  };
  return (
    <button
      className={
        "w-16 text-xs font-bold p-1 rounded-lg" +
        textColorStorage[textColor] +
        bgColorStorage[bgColor]
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
