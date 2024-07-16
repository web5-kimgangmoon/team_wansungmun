import { MouseEvent } from "react";

interface IProps {
  textColor: "white" | "black";
  bgColor: "blue" | "gray" | "red" | "green" | "white";
  isBorder?: boolean;
  children: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => {};
}

const MediumBtn = ({
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
    <div className="flex justify-center m-1">
      <div
        className={
          "w-[9.375rem] h-[2rem] text-sm text-center font-bold rounded-lg leading-8" +
          textColorStorage[textColor] +
          bgColorStorage[bgColor] +
          `${isBorder ? " border border-cusGray" : ""}`
        }
        // onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};

export default MediumBtn;
