import { MouseEvent } from "react";

interface IProps {
  textColor: "white" | "black";
  bgColor: "blue" | "gray" | "red" | "green" | "orange";
  children: string;
  isRounded?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({
  textColor,
  bgColor,
  children,
  onClick,
  isRounded,
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
  };
  return (
    <button
      className={
        "w-16 text-xs font-bold p-1" +
        textColorStorage[textColor] +
        bgColorStorage[bgColor] +
        `${isRounded ? " rounded-xl" : " rounded-md"}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
