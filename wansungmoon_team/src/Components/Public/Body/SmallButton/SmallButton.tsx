import { MouseEvent } from "react";

interface IProps {
  textColor: "white" | "black";
  bgColor: "blue" | "gray" | "red" | "green" | "white";
  isBorder?: boolean;
  children: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const SmallButton = ({
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
    <div className="flex">
      <div
        className={
          "border w-[70px] h-7 rounded text-xs text-center font-black leading-6 m-1" +
          textColorStorage[textColor] +
          bgColorStorage[bgColor] +
          `${isBorder ? " border border-cusGray" : ""}`
        }
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};

export default SmallButton;
