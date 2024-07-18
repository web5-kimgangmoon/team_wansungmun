import { Children } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import ProductUpload from "./Components/ProductUpload";
import MediumBtn from "./Components/Public/Body/MediumButton/MediumBtn";
import SmallButton from "./Components/Public/Body/SmallButton/SmallButton";
import OrderListPage from "./Components/OrderListPage";
import SearchVoca from "./Components/Public/Body/SearchVoca/SearchVoca";
import { Route, Routes } from "react-router-dom";
import Email from "./Components/Temp/Email";
import KakaoBtn from "./Components/Temp/KakaoBtn";
import Login from "./Components/Login";
import Email_login from "./Components/Login/Login_Email/Comp";
import Regist from "./Components/regist";
import Main from "./Components/Main/Main";
import MenuBar from "./Components/Public/Footer/MenuBar";
import List from "./Components/ProductList/Body";

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <ProductList></ProductList>
      <MenuBar></MenuBar>
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
        <Route path="/login" Component={Login}></Route>
        <Route path="/login/email" Component={Email_login}></Route>
        <Route path="/regist" Component={Regist}></Route>
        {/* <Route path="/regist/email" Component={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
