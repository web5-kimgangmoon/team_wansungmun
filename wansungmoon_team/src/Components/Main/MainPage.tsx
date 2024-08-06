import Header from "../Header";
// import List from "../ProductList/Body";
// import More from "../ProductList/More";
import MenuBar from "../Public/Footer/MenuBar";
import Main from "./Body";

// interface IProps {}

const MainPage = () => {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      {/* <More></More>
      <List></List> */}
      <div className="py-4"></div>
      <MenuBar></MenuBar>
    </div>
  );
};

export default MainPage;
