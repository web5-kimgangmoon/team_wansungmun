import MenuBar from "../Public/Footer/MenuBar";
import Header from "../Header";
import SingleTextBox from "../Public/Header/singleTextBox";
import Body from "./body";

const LocationCheck = () => {
  return (
    <div>
      <div>
        <Header />
        <SingleTextBox>배송품위치확인</SingleTextBox>
      </div>
      <div>
        <Body />
      </div>
      <MenuBar />
    </div>
  );
};

export default LocationCheck;
