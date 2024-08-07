interface IProps {
  children: string;
}

const MainItem = ({ children }: IProps) => {
  // const settings = {
  //   dots: true,
  //   // dotsClass:{},
  //   infinite: true,
  //   speed: 500,
  //   slidesPerRow: 5,
  //   // slidesToShow: 5,
  //   // slidesToScroll: 2,
  //   rows: 3,
  // };
  return (
    <div className="w-[20%]">
      <div className="bg-cusGray w-[3rem] h-[3rem] rounded-xl"></div>
      <div className="text-xs text-center font-bold">{children}</div>
    </div>
  );
};

export default MainItem;
