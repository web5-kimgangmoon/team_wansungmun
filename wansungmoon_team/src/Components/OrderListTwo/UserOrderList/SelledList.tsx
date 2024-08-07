import Header from "../../Header";
import CenterBody from "../../Public/Body/CenterBody";
import Item, { IProps as IItem } from "../../Public/Body/ProductInfoItem";
import MenuBar from "../../Public/Footer/MenuBar";
import SingleTextBox from "../../Public/Header/singleTextBox";
import bycle from "../../../imgs/Kakao_logo.jpg";
import { useState } from "react";

const OrderListPage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const productList: IItem[] = [
    {
      bottomData: {
        title: "중고자전거-싸게 파는중!!!",
        score: 3,
        reviewCount: 26,
        writer: "게살버거킹",
        src: bycle,
        pressBtnInfo: {
          tradeListPath: "/",
          move: "reviewWrite",
          onClick: undefined,
        },
      },
      topData: { state: "reviewed", date: new Date(Date.now() - 200000) },
      path: undefined,
      onClickAll: undefined,
      onClickClose: undefined,
    },
    {
      bottomData: {
        title: "자전거 한 번만 쓰던겁니다~~~ 지금만",
        score: 3,
        reviewCount: 26,
        writer: "게살버거킹",
        src: bycle,
        pressBtnInfo: {
          tradeListPath: "/",
          move: "reviewWrite",
          onClick: undefined,
        },
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
          move: "reviewWrite",
          onClick: undefined,
        },
      },
      topData: { state: "traded", date: new Date(Date.now() - 20000000000) },

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
          move: "reviewComplete",
          onClick: undefined,
        },
      },
      topData: { state: "traded", date: new Date(Date.now() - 200000000000) },

      path: undefined,
      onClickAll: undefined,
      onClickClose: undefined,
    },
  ];
  return (
    <div>
      <Header />
      <SingleTextBox
        closeOnClick={(e) => {
          e.stopPropagation();
          setIsOpenModal(false);
        }}
        isOpenModal={isOpenModal}
        onClick={() => setIsOpenModal(true)}
        titleNPath={[
          ["거래완료한 상품", "/orderListSelled"],
          ["거래중인 상품", "/orderListSelling"],
        ]}
      >
        거래완료한 상품
      </SingleTextBox>
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
