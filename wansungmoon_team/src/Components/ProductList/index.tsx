import Header from "../Header";
import MenuBar from "../Public/Footer/MenuBar";
import List from "./Body";
import More from "./More";

interface IProps {}

const ProductList = () => {
  return (
    <div>
      <Header></Header>
      <List></List>
      <MenuBar></MenuBar>
    </div>
  );
};

export default ProductList;
