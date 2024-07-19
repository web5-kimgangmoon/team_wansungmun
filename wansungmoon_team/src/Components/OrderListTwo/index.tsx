import Header from "../Header";
import CenterBody from "../Public/Body/CenterBody";
import Item from "../Public/Body/ProductInfoItem";
import MenuBar from "../Public/Footer/MenuBar";
import SingleTextBox from "../Public/Header/singleTextBox";

const OrderListPage = () => {
  return (
    <div>
      <Header />
      <SingleTextBox>주문내역</SingleTextBox>
      <CenterBody>
        <Item
          bottomData={{
            title: "test",
            score: 5,
            reviewCount: 10,
            writer: "test",
            src: "/",
          }}
          topData={{}}
        />
      </CenterBody>
      <MenuBar />
    </div>
  );
};

export default OrderListPage;
