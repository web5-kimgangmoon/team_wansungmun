import { ReactNode } from "react";

interface IProps {
  className?: string;
  positionClass?: string; // absolute를 박은 svg
  isInActive?: boolean;
  svg: ReactNode;
}

const SvgWrapper = ({
  className = "",
  isInActive = false,
  positionClass = "",
  svg,
}: IProps): JSX.Element => {
  return (
    <div
      className={
        className + " " + positionClass + `${isInActive ? "text-gray-500" : ""}`
      }
    >
      {svg}
    </div>
  );
};
export default SvgWrapper;
