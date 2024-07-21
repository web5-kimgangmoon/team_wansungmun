import Back from "./img/back1.png";
import Share from "./img/share1.png";
import Heart from "./img/heart.png";
import Serach from "./img/search1.png";

const ProductPageMenu = () => {
  return (
    <div className="flex gap-[14rem] h-6">
      <button className="w-5 ml-2">
        <img src={Back} alt="" />
      </button>
      <div className="flex gap-3">
        <button className="w-5">
          <img src={Share} alt="" />
        </button>
        <button className="w-5">
          <img src={Heart} alt="" />
        </button>
        <button className="w-5">
          <img src={Serach} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductPageMenu;
