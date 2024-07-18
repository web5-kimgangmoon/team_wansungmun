import SingleTextBox from "../Public/Header/singleTextBox";
import MenuBar from "../Public/Footer/MenuBar";
import Body from "./Body";
import Header from "../Header";

const ProductUpload = (): JSX.Element => {
  return (
    <div>
      <div className="Header">
        <Header />
        <SingleTextBox>상품 올리기</SingleTextBox>
      </div>
      <Body />
      <div className="Footer">
        <MenuBar />
      </div>
    </div>
  );
};

export default ProductUpload;
