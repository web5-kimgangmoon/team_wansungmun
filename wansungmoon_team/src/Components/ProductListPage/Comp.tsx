import Header from "../Header";
import Item from "../Public/Body/ProductInfoItem";
import MenuBar from "../Public/Footer/MenuBar";
import SingleTextBox from "../Public/Header/singleTextBox";

export type DataTy = {
  id: number;
  bottomData: {
    title: string;
    score: number;
    reviewCount: number;
    writer: string;
    src: string;
    stateBtnInfo: {
      state: "trading" | "traded" | "selling";
      isDirectTrade: boolean;
    };
    isHeartFull: undefined;
  };
  path: string;
  onClickAll: undefined;
  onClickClose: undefined;
};

interface IProps {
  dataArr: DataTy[];
}

const ProductListPage = ({ dataArr }: IProps): JSX.Element => {
  return (
    <div>
      <Header />
      <SingleTextBox>상품내역</SingleTextBox>
      {dataArr.map((item) => (
        <Item
          key={item.id}
          bottomData={item.bottomData}
          topData={undefined}
          path={item.path}
          onClickAll={item.onClickAll}
          onClickClose={item.onClickClose}
        />
      ))}
      <MenuBar />
    </div>
  );
};

export default ProductListPage;
