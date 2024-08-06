import ProductList from "./Components/ProductList";
import ProductUpload from "./Components/ProductUpload";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Email_login from "./Components/Login/Login_Email/Comp";
import Regist from "./Components/regist";
import ReviewWrite from "./Components/ReviewNreportWrite/ReviewWrite";
import ReportWrite from "./Components/ReviewNreportWrite/ReportWrite";
import OrderListPage from "./Components/OrderListTwo";
import OrderListPageSelled from "./Components/OrderListTwo/UserOrderList/SelledList";
import OrderListPageSelling from "./Components/OrderListTwo/UserOrderList/SellingList";
import Dib from "./Components/OrderListTwo/Dib";
import Regist_email from "./Components/regist/regist_email/Comp";
import ReviewHistory from "./Components/ReviewHistory";
import ProductDetail from "./Components/ProductDetail";
import LocationCheck from "./Components/LocationCheck/index";
import KakaoCallback from "./Components/Login/Login_kakao/KakaoCallback";
import Kakao_regist from "./Components/regist/regist_kakao/Comp";
import InfoPage from "./Components/MyInfo/comp";
import Buy from "./Components/ProductBuy";
import { Logout } from "./Components/Logout";

import ProductListPage from "./Components/ProductListPage";
import ProductDetailP from "./Components/ProductPage/index";
import MainPage from "./Components/Main/MainPage";
import DeliveryListPage from "./Components/Delivery/index";
import DeliveryDetail from "./Components/DeliveryDetail";
import PointPageMain from "./Components/Point/Comp";

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
        {/* <Route path="/regist" Component={Regist}></Route> */}
        <Route path="/orderList" Component={OrderListPage}></Route>
        <Route path="/orderListSelled" Component={OrderListPageSelled}></Route>
        <Route
          path="/orderListSelling"
          Component={OrderListPageSelling}
        ></Route>
        <Route path="/reviewHistory" Component={ReviewHistory}></Route>
        <Route path="/Dib" Component={Dib}></Route>
        <Route path="/orderDetail/:productId" Component={ProductDetail}></Route>
        {/* <Route path="/regist/email" Component={Regist_email}></Route> */}
        <Route path="/locationCheck/:productId" Component={LocationCheck} />
        {/* <Route path="/regist/kakao" Component={Kakao_regist}></Route> */}
        <Route path="/productupload" Component={ProductUpload}></Route>
        <Route path="/logout" Component={Logout}></Route>
        <Route path="/list" Component={ProductList}></Route>
        <Route path="/info" Component={InfoPage}></Route>
        <Route path="/productbuy" Component={Buy}></Route>
        <Route path="/productlist" Component={ProductList}></Route>
        <Route path="/delivery" Component={DeliveryListPage}></Route>
        <Route
          path="/deliverydetail/:productId"
          Component={DeliveryDetail}
        ></Route>
        <Route path="/pointcharge" Component={PointPageMain}></Route>
      </Routes>
    </div>
  );
}

export default App;
