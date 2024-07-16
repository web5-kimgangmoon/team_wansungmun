import { MouseEvent } from "react";

interface IProps {
  textColor: "white" | "black";
  bgColor: "blue" | "gray" | "red" | "green" | "white";
  isBorder?: boolean;
  children: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => {};
}

const LongButton = ({
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
