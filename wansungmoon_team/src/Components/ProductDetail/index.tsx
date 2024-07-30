import Header from "../Header";
import MenuBar from "../Public/Footer/MenuBar";
import SingleTextBox from "../Public/Header/singleTextBox";
import Body from "./body";

const ProductDetail = () => {
  return (
    <div>
      <div>
        <Header />
        <SingleTextBox>상세내역</SingleTextBox>
      </div>
      <div>
        <Body />
      </div>
      <div>
        <MenuBar />
      </div>
    </div>
  );
};

export default ProductDetail;
