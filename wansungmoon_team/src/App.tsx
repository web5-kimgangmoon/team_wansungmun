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
import Main from "./Components/Main/Main";
import MenuBar from "./Components/Public/Footer/MenuBar";

import List from "./Components/ProductList/Body";
import ReviewWrite from "./Components/ReviewNreportWrite/ReviewWrite";
import ReportWrite from "./Components/ReviewNreportWrite/ReportWrite";

import OrderListPage from "./Components/OrderListTwo";
import OrderListPageSelled from "./Components/OrderListTwo/UserOrderList/SelledList";
import OrderListPageSelling from "./Components/OrderListTwo/UserOrderList/SellingList";
import Dib from "./Components/OrderListTwo/Dib";
import Regist_email from "./Components/Regist/Regist_Email/Comp";

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
        <Route
          path="/"
          element={
            <div>
              <Header></Header>
              <Main></Main>
              <ProductList></ProductList>
              <MenuBar></MenuBar>
            </div>
          }
        ></Route>
        <Route path="/reviewWrite" Component={ReviewWrite} />
        <Route path="/reportWrite" Component={ReportWrite} />
        <Route path="/upload" Component={ProductUpload}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/login/email" Component={Email_login}></Route>
        <Route path="/regist" Component={Regist}></Route>
        <Route path="/orderList" Component={OrderListPage}></Route>
        <Route path="/orderListSelled" Component={OrderListPageSelled}></Route>
        <Route
          path="/orderListSelling"
          Component={OrderListPageSelling}
        ></Route>
        <Route path="/Dib" Component={Dib}></Route>
        <Route path="/regist/email" Component={Regist_email}></Route>
      </Routes>
    </div>
  );
}

export default App;
