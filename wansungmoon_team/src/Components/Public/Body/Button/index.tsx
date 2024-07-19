import { MouseEvent } from "react";

interface IProps {
  textColor: "white" | "black";
  bgColor: "white" | "blue" | "gray" | "red" | "green" | "orange" | "yellow";
  children: string;
  isRounded?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isLong?: boolean;
  isSmall?: boolean;
  isBorder?: boolean;
}
const Button = ({
  textColor,
  bgColor,
  children,
  onClick,
  isRounded = false,
  isLong = false,
  isBorder = false,
  isSmall = false,
}: IProps): JSX.Element => {
  const textColorStorage = {
    black: " text-black",
    white: " text-white",
  };
  const bgColorStorage = {
    white: " bg-white",
    blue: " bg-blueButton-default",
    gray: " bg-cusGray",
    red: " bg-redButton",
    green: " bg-greenButton",
    orange: " bg-orangeButton",
    yellow: " bg-yellow",
  };
  let width =
    isLong && isSmall
      ? " py-1 min-w-24 text-sm"
      : isLong
      ? " py-1 min-w-24 text-sm"
      : isSmall
      ? " py-0.5 px-1 text-xs"
      : " p-1 min-w-16 text-xs";
  if (isLong && isSmall) {
    isSmall = false;
  }
  return (
    <button
      className={
        "font-bold" +
        textColorStorage[textColor] +
        bgColorStorage[bgColor] +
        `${isRounded ? " rounded-xl" : " rounded-lg"}` +
        `${isBorder ? " border border-cusGray" : ""}` +
        width
        // `${isLong ? " py-1 min-w-24 text-sm" : " p-1 min-w-16 text-xs"}` +
        // `${isSmall ? " py-1 min-w-12 text-xs" : ""}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
