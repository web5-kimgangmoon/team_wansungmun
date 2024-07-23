import { MouseEvent } from "react";

interface IProps {
  textColor: "white" | "black" | "red";
  bgColor: "blue" | "gray" | "red" | "green" | "white" | "yellow" | "realRed";
  isBorder?: boolean;
  children: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const LongButton = ({ textColor, bgColor, children, isBorder = false, onClick }: IProps): JSX.Element => {
  const textColorStorage = {
    black: " text-black",
    white: " text-white",
    red: " text-red",
  };
  const bgColorStorage = {
    blue: " bg-blueButton-long",
    gray: " bg-cusGray",
    red: " bg-redButton",
    green: " bg-greenButton",
    white: "bg-white",
    yellow: " bg-yellow",
    realRed: " bg-realRed",
  };
  return (
    <button
      className={
        "w-full text-sm text-center font-bold p-2 rounded-lg" +
        textColorStorage[textColor] +
        bgColorStorage[bgColor] +
        `${isBorder ? " border border-cusGray" : ""}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LongButton;
