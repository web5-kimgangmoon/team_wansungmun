import { useParams } from "react-router-dom";
import useCategoryProducts from "../../hooks/useCateProducts";
import Comp, { DataTy } from "./Comp";
import { useState, ChangeEvent } from "react";

const ProductListPage = () => {
  let { categoryId } = useParams();
  if (!categoryId || Number.isNaN(+categoryId)) categoryId = "1";
  let { data, isPending } = useCategoryProducts(+categoryId);

  const [isDirectCheck, setIsDirectCheck] = useState<boolean>(true);
  if (isPending) return <div>로딩중</div>;

  const itemArr: DataTy[] = [];
  for (let item of data.products) {
    itemArr.push({
      id: item.id as number,
      bottomData: {
        title: item.productName as string,
        score: item.avarageScore as number,
        reviewCount: item.reviewCount as number,
        writer: item.nickName as string,
        src: item.titleImg as string,
        stateBtnInfo: {
          state: item.tradeStatus == 1 ? "selling" : item.tradeStatus == 2 ? "trading" : "traded",
          isDirectTrade: item.isDirectTrade as boolean,
        },
        isHeartFull: undefined,
      },
      path: `/productDetail/${item.id}`,
      onClickAll: undefined,
      onClickClose: undefined,
    });
  }
  return (
    <Comp
      dataArr={itemArr}
      setIsDirectCheck={(e) => {
        setIsDirectCheck(e.target.checked);
      }}
      isDirectCheck={isDirectCheck}
      category={data.category}
    />
  );
};

export default ProductListPage;
