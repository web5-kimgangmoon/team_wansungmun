import MainItem from "./MainItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {
  titleArr: string[];
}

const MainList = ({ titleArr }: IProps) => {
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
        {titleArr.map((title) => (
          <div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-cusGray w-[3rem] h-[3rem] rounded-xl"></div>
              <div className="text-xs font-bold">{title}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainList;
