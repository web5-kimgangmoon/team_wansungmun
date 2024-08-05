import Comp from // , { IProps as IData }
"./comp";
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
  const { data, isPending, isFetching } = useProductDetail(
    productId ? +productId : -1
  );
  if (isPending || isFetching) return <div>로딩중</div>;
  if (!data || !data.data) return <div>데이터가 존재하지 않습니다</div>;
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
