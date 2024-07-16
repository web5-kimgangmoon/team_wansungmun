import { Children } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import ProductUpload from "./Components/ProductUpload";
import MediumBtn from "./Components/Public/Body/MediumButton/MediumBtn";
import SmallButton from "./Components/Public/Body/SmallButton/SmallButton";
import OrderListPage from "./Components/OrderListPage";
import SearchVoca from "./Components/Public/Body/SearchVoca/SearchVoca";

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      {/* <ProductUpload></ProductUpload> */}
      <ProductList></ProductList>
      {/* <MediumBtn textColor="white" bgColor="blue">
        포인트 충전
      </MediumBtn> */}
      {/* <SmallButton textColor="white" bgColor="white">
        거래상세
      </SmallButton> */}
      {/* <OrderListPage></OrderListPage> */}
      {/* <SearchVoca textColor="black" bgColor="white">
        세탁기
      </SearchVoca> */}
    </div>
  );
}

export default App;
