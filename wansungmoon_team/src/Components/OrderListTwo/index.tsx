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
        score: 5,
        reviewCount: 10,
        writer: "나는야작성자",
        src: bycle,
        pressBtnInfo: {
          tradeListPath: "/",
          move: "locationCheck",
          onClick: undefined,
        },
        isHeartFull: false,
      },
      topData: { state: "selling" },
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
        pressBtnInfo: {
          tradeListPath: "/",
          move: "reviewWrite",
          onClick: undefined,
        },
        isHeartFull: false,
      },
      topData: { state: "reviewed", date: new Date() },
      path: undefined,
      onClickAll: undefined,
      onClickClose: undefined,
    },
    {
      bottomData: {
        title: "지금 놓치면 기회없어요!!!",
        score: 3,
        reviewCount: 26,
        writer: "게살버거킹",
        src: bycle,
        pressBtnInfo: {
          tradeListPath: "/",
          move: "chating",
          onClick: undefined,
        },
        isHeartFull: true,
      },
      topData: { state: "trading", date: new Date() },
      path: undefined,
      onClickAll: undefined,
      onClickClose: undefined,
    },
    {
      bottomData: {
        title: "지금 놓치면 기회없어요!!!",
        score: 3,
        reviewCount: 26,
        writer: "게살버거킹",
        src: bycle,
        pressBtnInfo: {
          tradeListPath: "/",
          move: "chating",
          onClick: undefined,
        },
        isHeartFull: false,
      },
      topData: { state: "traded", date: new Date() },
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
          <Item
            key={idx}
            bottomData={{
              title: item.bottomData.title,
              score: item.bottomData.score,
              reviewCount: item.bottomData.reviewCount,
              writer: item.bottomData.writer,
              src: item.bottomData.src,
              isHeartFull: item.bottomData.isHeartFull,
              pressBtnInfo: {
                tradeListPath: item.bottomData.pressBtnInfo?.tradeListPath
                  ? item.bottomData.pressBtnInfo.tradeListPath
                  : "",
                move: item.bottomData.pressBtnInfo?.move,
                onClick: item.bottomData.pressBtnInfo?.onClick,
              },
            }}
            topData={{ state: item.topData?.state, date: item.topData?.date }}
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
