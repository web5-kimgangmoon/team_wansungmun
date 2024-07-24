import { Children } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import ProductUpload from "./Components/ProductUpload";
import MediumBtn from "./Components/Public/Body/MediumButton/MediumBtn";
import SmallButton from "./Components/Public/Body/SmallButton/SmallButton";
import SearchVoca from "./Components/Public/Body/SearchVoca/SearchVoca";
import { Link, Route, Routes } from "react-router-dom";
import Email from "./Components/Temp/Email";
import KakaoBtn from "./Components/Temp/KakaoBtn";
import Login from "./Components/Login";
import Email_login from "./Components/Login/Login_Email/Comp";
import Regist from "./Components/Regist";
import MenuBar from "./Components/Public/Footer/MenuBar";
import List from "./Components/ProductList/Body";
import ReviewWrite from "./Components/ReviewNreportWrite/ReviewWrite";
import ReportWrite from "./Components/ReviewNreportWrite/ReportWrite";
import OrderListPage from "./Components/OrderListTwo";
import OrderListPageSelled from "./Components/OrderListTwo/UserOrderList/SelledList";
import OrderListPageSelling from "./Components/OrderListTwo/UserOrderList/SellingList";
import Dib from "./Components/OrderListTwo/Dib";
import Regist_email from "./Components/Regist/Regist_email/Comp";
import ProductPage from "./Components/ProductPage/ProductPage";
import ReviewHistory from "./Components/ReviewHistory";
import ProductDetail from "./Components/ProductDetail/test";
import LocationCheck from "./Components/LocationCheck";
import KakaoCallback from "./Components/Login/Login_kakao/KakaoCallback";
import Kakao_regist from "./Components/Regist/regist_kakao/Comp";
import MultipleItems from "./Components/Main/Slide";
import MultipleRows from "./Components/Main/Slide";
import InfoPage from "./Components/MyInfo/comp";
import Buy from "./Components/ProductBuy";
import ProductPageContents from "./Components/ProductPage/ProductPageContents";
import PayComplete from "./Components/ProductBuy/Modal/PayComplete";
import { Logout } from "./Components/Logout";

import BottomIcons from "./Components/BottomIcons";
import ProductListPage from "./Components/ProductListPage";
import ProductDetailP from "./Components/ProductPage/index";
import MainPage from "./Components/Main/MainPage";
import axios from "axios";
import DeliveryListPage from "./Components/Delivery/comp";
import DeliveryDetail from "./Components/DeliveryDetail/comp";

function App() {
  return (
    <div>
      {/* <ProductUpload></ProductUpload> */}
      {/* <ProductList></ProductList> */}
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
      <BottomIcons />
      <Routes>
        <Route path="/productList/:categoryId" Component={ProductListPage} />
        <Route path="/productDetail/:productId" Component={ProductDetailP} />
        <Route path="/regist/kakao" Component={Kakao_regist}></Route>
        <Route path="/regist" Component={Regist}></Route>
        <Route path="/regist/email" Component={Regist_email}></Route>
        <Route path="/" Component={MainPage}></Route>
        <Route path="/reviewWrite" Component={ReviewWrite} />
        <Route path="/reportWrite" Component={ReportWrite} />
        <Route path="/upload" Component={ProductUpload}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/login/email" Component={Email_login}></Route>
        <Route path="/login/kakao" Component={KakaoCallback}></Route>
        <Route path="/regist" Component={Regist}></Route>
        <Route path="/orderList" Component={OrderListPage}></Route>
        <Route path="/orderListSelled" Component={OrderListPageSelled}></Route>
        <Route
          path="/orderListSelling"
          Component={OrderListPageSelling}
        ></Route>
        <Route path="/reviewHistory" Component={ReviewHistory}></Route>
        <Route path="/Dib" Component={Dib}></Route>
        <Route path="/productDetail" Component={ProductDetail}></Route>
        <Route path="/regist/email" Component={Regist_email}></Route>
        <Route path="/locationCheck" Component={LocationCheck} />
        <Route path="/regist/kakao" Component={Kakao_regist}></Route>
        <Route path="/productupload" Component={ProductUpload}></Route>
        <Route path="/logout" Component={Logout}></Route>
        <Route path="/list" Component={ProductList}></Route>
        <Route path="/info" Component={InfoPage}></Route>
        <Route path="/productbuy" Component={Buy}></Route>
        <Route path="/productlist" Component={ProductList}></Route>
        <Route path="/delivery" Component={DeliveryListPage}></Route>
        <Route path="/deliverydetail" Component={DeliveryDetail}></Route>
      </Routes>
    </div>
  );
}

export default App;
