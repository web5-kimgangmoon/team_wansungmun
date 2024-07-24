import CateBar from "../ProductListPage/CategoryBar";
import CategoryBar from "../ProductListPage/CategoryBar/CategoryBar";
import Header from "../Header";
import MenuBar from "../Public/Footer/MenuBar";
import List from "./Body";
import More from "./More";

interface IProps {}

const ProductList = () => {
  return (
    <div>
      <Header></Header>
      {/* <CateBar></CateBar> */}
      <List></List>
      <MenuBar></MenuBar>
    </div>
  );
};

export default ProductList;
