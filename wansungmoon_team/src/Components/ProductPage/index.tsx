import Comp, { IProps as IData } from "./comp";
import { useParams } from "react-router-dom";
import useProductDetail from "../../hooks/product/useProductDetail";

export interface IProps {
  category: string;
  contents: string;
  title: string;
  writer: string;
  location: string;
  price: number;
  score: number;
  reviewCount: number;
  src: string;
  sellerId: number;
}

const Content = () => {
  const { productId } = useParams();
  const { data, isPending } = useProductDetail(productId ? +productId : -1);
  if (isPending) return <div>로딩중</div>;
  if (!data) return <div>페이지를 불러오는데 실패했습니다</div>;
  return (
    <Comp
      productId={data.id}
      sellerId={data.seller_id}
      category={data.category}
      contents={data.content}
      title={data.productName}
      writer={data.nickName}
      location={data.tradeLocation}
      price={data.price}
      score={data.averageScore ? data.avarageScore : 0}
      reviewCount={data.reviewCount}
      src={data.titleImg}
    />
  );
};

export default Content;
