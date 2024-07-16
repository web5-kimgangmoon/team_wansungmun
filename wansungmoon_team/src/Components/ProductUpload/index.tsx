import SingleTextBox from "../Public/Header/singleTextBox";
import MenuBar from "../Public/Footer/MenuBar";
import Body from "./Body";

const ProductUpload = (): JSX.Element => {
  return (
    <div>
      <div className="Header">
        <SingleTextBox>상품 올리기</SingleTextBox>
      </div>
      <Body />
      <div className="Footer">
        <MenuBar inactiveElement={3} />
      </div>
    </div>
  );
};

export default ProductUpload;
