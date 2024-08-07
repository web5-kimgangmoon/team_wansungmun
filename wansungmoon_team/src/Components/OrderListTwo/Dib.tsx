import Header from "../Header";
import CenterBody from "../Public/Body/CenterBody";
import Item, { IProps as IItem } from "../Public/Body/ProductInfoItem";
import MenuBar from "../Public/Footer/MenuBar";
import SingleTextBox from "../Public/Header/singleTextBox";
import bycle from "../../imgs/Kakao_logo.jpg";

const OrderListPage = () => {
  const productList: IItem[] = [
    {
      bottomData: {
        title: "중고자전거-싸게 파는중!!!",
        score: 4.4,
        reviewCount: 20,
        writer: "나는야작성자",
        src: bycle,
        stateBtnInfo: { state: "selling", isDirectTrade: true },
        isHeartFull: false,
      },
      path: undefined,
      onClickAll: undefined,
      onClickClose: undefined,
    },
    {
      bottomData: {
        title: "자전거 한 번만 쓰던겁니다~~~ 지금만",
        score: 5,
        reviewCount: 22,
        writer: "아아아",
        src: bycle,
        stateBtnInfo: { state: "traded", isDirectTrade: false },
        isHeartFull: false,
      },
      path: undefined,
      onClickAll: undefined,
      onClickClose: () => {},
    },
    {
      bottomData: {
        title: "지금 놓치면 기회없어요!!!",
        score: 3,
        reviewCount: 26,
        writer: "게살버거킹",
        src: bycle,
        stateBtnInfo: { state: "selling", isDirectTrade: false },
        isHeartFull: true,
      },
      path: undefined,
      onClickAll: undefined,
      onClickClose: () => {},
    },
  ];
  return (
    <div>
      <Header />
      <SingleTextBox>찜</SingleTextBox>
      <CenterBody>
        {productList.map((item, idx) => (
          <Item
            key={idx}
            bottomData={item.bottomData}
            topData={item.topData}
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

export default OrderListPage;
