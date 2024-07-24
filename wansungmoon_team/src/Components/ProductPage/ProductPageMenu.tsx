import Back from "./img/back1.png";
import Share from "./img/share1.png";
import Heart from "../../svgs/DinamicHeart";
import Serach from "./img/search1.png";
import { useNavigate } from "react-router-dom";

const ProductPageMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-6 justify-between w-full">
      <button className="w-6 p-1 rounded-full bg-white" onClick={() => navigate(-1)}>
        <img src={Back} alt="" />
      </button>
      <div className="flex gap-3">
        <button className="w-6 p-1 rounded-full bg-white">
          <img src={Share} alt="" />
        </button>
        <button className="w-6 pt-1 rounded-full bg-white">
          <Heart />
        </button>
        <button className="w-6 p-0.5 rounded-full bg-white">
          <img src={Serach} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductPageMenu;
