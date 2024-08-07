import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export type CateArrTy = Array<{
  category: string;
  id: number;
  cateImg: string;
}>;

interface IProps {
  cateArr: CateArrTy;
}

const MainList = ({ cateArr }: IProps) => {
  const settings = {
    dots: true,
    // dotsClass:{},
    infinite: true,
    speed: 500,
    slidesPerRow: 5,
    // slidesToShow: 5,
    // slidesToScroll: 2,
    rows: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cateArr.map((item) => (
          <div key={item.id}>
            <Link to={`/productList/${item.id}`}>
              <div className="flex flex-col items-center text-center">
                <div className="w-[3rem] h-[3rem] rounded-xl">
                  <img src={item.cateImg} alt="이미지" />
                </div>
                <div className="text-xs font-bold">{item.category}</div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainList;
