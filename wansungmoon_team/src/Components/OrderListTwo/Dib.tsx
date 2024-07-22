import Header from "../Header";
import CenterBody from "../Public/Body/CenterBody";
// import Item, { IProps as IItem } from "../Public/Body/ProductInfoItem";
import MenuBar from "../Public/Footer/MenuBar";
import SingleTextBox from "../Public/Header/singleTextBox";
import bycle from "../../imgs/Kakao_logo.jpg";
import ProductItem from "../Public/Body/ProductInfoItem/Single";
import { IProps as IItem } from "../Public/Body/ProductInfoItem/Single";

const Dib = () => {
  // const productList: IItem[] = [
  //   {
  //     bottomData: {
  //       title: "중고자전거-싸게 파는중!!!",
  //       score: 5,
  //       reviewCount: 10,
  //       writer: "나는야작성자",
  //       src: bycle,
  //       pressBtnInfo: {
  //         tradeListPath: "/",
  //         move: "locationCheck",
  //         onClick: undefined,
  //       },
  //       isHeartFull: false,
  //     },
  //     topData: { state: "selling" },
  //     path: undefined,
  //     onClickAll: undefined,
  //     onClickClose: undefined,
  //   },
  //   {
  //     bottomData: {
  //       title: "자전거 한 번만 쓰던겁니다~~~ 지금만",
  //       score: 5,
  //       reviewCount: 22,
  //       writer: "아아아",
  //       src: bycle,
  //       pressBtnInfo: {
  //         tradeListPath: "/",
  //         move: "reviewWrite",
  //         onClick: undefined,
  //       },
  //       isHeartFull: false,
  //     },
  //     topData: { state: "reviewed", date: new Date() },
  //     path: undefined,
  //     onClickAll: undefined,
  //     onClickClose: undefined,
  //   },
  //   {
  //     bottomData: {
  //       title: "지금 놓치면 기회없어요!!!",
  //       score: 3,
  //       reviewCount: 26,
  //       writer: "게살버거킹",
  //       src: bycle,
  //       pressBtnInfo: {
  //         tradeListPath: "/",
  //         move: "chating",
  //         onClick: undefined,
  //       },
  //       isHeartFull: true,
  //     },
  //     topData: { state: "trading", date: new Date() },
  //     path: undefined,
  //     onClickAll: undefined,
  //     onClickClose: undefined,
  //   },
  //   {
  //     bottomData: {
  //       title: "지금 놓치면 기회없어요!!!",
  //       score: 3,
  //       reviewCount: 26,
  //       writer: "게살버거킹",
  //       src: bycle,
  //       pressBtnInfo: {
  //         tradeListPath: "/",
  //         move: "chating",
  //         onClick: undefined,
  //       },
  //       isHeartFull: false,
  //     },
  //     topData: { state: "traded", date: new Date() },
  //     path: undefined,
  //     onClickAll: undefined,
  //     onClickClose: undefined,
  //   },
  // ];
  const productList: IItem[] = [
    {
      title: "중고자전거-싸게 파는중!!!",
      score: 5,
      reviewCount: 10,
      writer: "나는야작성자",
      src: bycle,
      isHeartFull: undefined,
      state: "selling",
      path: undefined,
      onClickAll: undefined,
      onClickClose: undefined,
    },
  ];
  return (
    <div>
      <Header />
      <SingleTextBox>주문내역</SingleTextBox>
      <CenterBody>
        {productList.map((item, idx) => (
          <ProductItem
            key={idx}
            title={item.title}
            score={item.score}
            reviewCount={item.reviewCount}
            writer={item.writer}
            src={item.src}
            isHeartFull={item.isHeartFull}
            state={item.state}
            path={item.path}
            onClickAll={item.onClickAll}
            onClickClose={item.onClickClose}
          />
        ))}
      </CenterBody>
      <MenuBar />
    </div>
  );
};

export default Dib;
