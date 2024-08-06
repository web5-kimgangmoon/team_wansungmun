import { useParams } from "react-router-dom";
import useCategoryProducts from "../../hooks/category/useCateProducts";
import Comp, { DataTy } from "./Comp";
import { useState } from "react";

const ProductListPage = () => {
  let { categoryId } = useParams();
  if (!categoryId || Number.isNaN(+categoryId)) categoryId = "1";
  let { data, isPending, isFetching } = useCategoryProducts(+categoryId);

  const [isDirectCheck, setIsDirectCheck] = useState<boolean>(true);
  if (isPending || isFetching) return <div>로딩중</div>;
  if (!data || !data.data) return <div>데이터가 존재하지 않습니다</div>;
  const itemArr: DataTy[] = [];
  for (let item of data.data.products) {
    if (isDirectCheck && !item.isDirectTrade) continue;
    itemArr.push({
      id: item.id as number,
      bottomData: {
        title: item.productName as string,
        score: item.avarageScore ? (item.averageScore as number) : 0,
        reviewCount: item.reviewCount as number,
        writer: item.nickName as string,
        src: item.titleImg as string,
        stateBtnInfo: {
          state:
            item.tradeStatus === 1
              ? "selling"
              : item.tradeStatus === 2
              ? "trading"
              : "traded",
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
      category={data.data.category}
    />
  );
};

export default ProductListPage;
