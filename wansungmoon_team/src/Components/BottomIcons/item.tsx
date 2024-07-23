import { MouseEvent } from "react";
import { Link } from "react-router-dom";
interface IProps {
  src: string;
  path: string;
}

const Icon = ({ src, path }: IProps) => {
  return (
    <Link to={path}>
      <div className="p-2 w-10 h-10 rounded-full border border-cusGray">
        <img src={src} className="w-full h-full" />
      </div>
    </Link>
  );
};

export default Icon;
