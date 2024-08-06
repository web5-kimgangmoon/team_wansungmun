import Header from "../Header";
import MenuBar from "../Public/Footer/MenuBar";
import List from "./Body";

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
