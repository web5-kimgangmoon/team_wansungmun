import { Link, useNavigate } from "react-router-dom";
import Back from "./img/BackArrow.png";
import Home from "./img/home.svg";

interface IProps {
  category?: string;
}

const CategoryBar = ({ category = "스포츠" }: IProps) => {
  const Navigate = useNavigate();
  return (
    <div className="flex px-4 justify-between">
      <div className="flex gap-4">
        <button
          onClick={() => {
            Navigate(-1);
          }}
        >
          <img src={Back} alt="" className="w-5" />
        </button>
        <div className="font-bold">{category}</div>
      </div>
      <button>
        <img src={Home} alt="" className="w-5" />
      </button>
    </div>
  );
};

export default CategoryBar;
