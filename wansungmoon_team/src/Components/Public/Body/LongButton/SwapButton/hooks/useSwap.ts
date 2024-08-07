import { useState } from "react";
import { MouseEvent } from "react";
const useSwap = () => {
  const [isSwapped, setIsSwapped] = useState<boolean>(false);
  const swapClick = (e: MouseEvent<HTMLDivElement>) => {
    setIsSwapped(!isSwapped);
  };
  return { isSwapped, swapClick };
};

export default useSwap;
