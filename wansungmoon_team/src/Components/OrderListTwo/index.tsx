import Header from "../Header";
import CenterBody from "../Public/Body/CenterBody";
import Item from "../Public/Body/ProductInfoItem";
import MenuBar from "../Public/Footer/MenuBar";
import SingleTextBox from "../Public/Header/singleTextBox";
import bycle from "../../imgs/Complete Moon (450 x 60 px).png";

const OrderListPage = () => {
  return (
    <div>
      <Header />
      <SingleTextBox>주문내역</SingleTextBox>
      <CenterBody>
        <Item
          bottomData={{
            title: "중고자전거-싸게 파는중!!!",
            score: 5,
            reviewCount: 10,
            writer: "나는야작성자",
            src: bycle,
            isHeartFull: false,
            pressBtnInfo: {
              tradeListPath: "/",
              move: "locationCheck",
              onClick: undefined,
            },
          }}
          topData={{ state: "trading" }}
          path={undefined}
          onClickAll={undefined}
          onClickClose={undefined}
        />
      </CenterBody>
      <MenuBar />
    </div>
  );
};

export default OrderListPage;
