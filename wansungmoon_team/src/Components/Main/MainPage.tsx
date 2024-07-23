import Header from "../Header";
import List from "../ProductList/Body";
import More from "../ProductList/More";
import MenuBar from "../Public/Footer/MenuBar";
import Main from "./Main";

interface IProps {}

const MainPage = () => {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <More></More>
      <List></List>
      <MenuBar></MenuBar>
    </div>
  );
};

export default MainPage;
