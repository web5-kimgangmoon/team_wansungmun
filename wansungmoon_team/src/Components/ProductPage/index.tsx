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
  status: number;
}

const Content = () => {
  const { productId } = useParams();
  const { data, isPending } = useProductDetail(productId ? +productId : -1);

  if (isPending) return <div>로딩중</div>;
  if (!data) return <div>페이지를 불러오는데 실패했습니다</div>;
  console.log(data.status);
  console.log(data.data.sellerId);
  console.log(data.data.id);

  return (
    <Comp
      status={data.status}
      productId={data.data.id}
      sellerId={data.data.sellerId}
      category={data.data.category}
      contents={data.data.content}
      title={data.data.productName}
      writer={data.data.nickName}
      location={data.data.tradeLocation}
      price={data.data.price}
      score={data.data.averageScore ? data.data.avarageScore : 0}
      reviewCount={data.data.reviewCount}
      src={data.data.titleImg}
    />
  );
};

export default Content;
