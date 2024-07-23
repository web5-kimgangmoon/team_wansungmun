import Back from "./img/BackArrow.png";
import Home from "./img/home.svg";

interface IProps {}

const CategoryBar = () => {
  return (
    <div className="flex px-4 justify-between">
      <div className="flex gap-4">
        <button>
          <img src={Back} alt="" className="w-5" />
        </button>
        <div className="font-bold">스포츠</div>
      </div>
      <button>
        <img src={Home} alt="" className="w-5" />
      </button>
    </div>
  );
};

export default CategoryBar;
