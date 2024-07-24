import CateBar from "./CategoryBar";
import Header from "../Header";
import Item from "../Public/Body/ProductInfoItem";
import MenuBar from "../Public/Footer/MenuBar";
import { ChangeEvent } from "react";

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
  isDirectCheck: boolean;

  category: string;
  setIsDirectCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}
const ProductListPage = ({ dataArr, isDirectCheck, category, setIsDirectCheck }: IProps): JSX.Element => {
  return (
    <div>
      <Header />
      <CateBar isDirectCheck={isDirectCheck} category={category} setIsDirectCheck={setIsDirectCheck}></CateBar>
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
