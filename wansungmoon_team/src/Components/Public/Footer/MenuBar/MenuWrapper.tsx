import SvgWrapper from "./SvgWrapper";
import { Link } from "react-router-dom";

interface IProps {
  className?: string;
  fontClassName?: string;
  isInActive?: boolean;
  text: string;
  svg: string;
  path?: string;
}

const MenuWrapper = ({
  className = "",
  fontClassName = "",
  isInActive = false,
  svg,
  text,
  path = "",
}: IProps): JSX.Element => {
  return (
    <Link to={path} className="flex flex-col grow">
      <div className="flex justify-center">
        <SvgWrapper className={className} isInActive={isInActive} svg={svg} />
      </div>
      <div className={fontClassName}>{text}</div>
    </Link>
  );
};

export default MenuWrapper;
