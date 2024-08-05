import Header from "../Header";
import CenterBody from "../Public/Body/CenterBody";
import Item, { IProps as IItem } from "../Public/Body/ProductInfoItem";
import MenuBar from "../Public/Footer/MenuBar";
import SingleTextBox from "../Public/Header/singleTextBox";
import useOrderList from "../../hooks/orderList/useOrderLIst";
import { useNavigate } from "react-router-dom";

const OrderListPage = () => {
  const navigate = useNavigate();
  const { data, isPending, isFetching } = useOrderList();
  if (isPending || isFetching) return <div>로딩중</div>;
  if (!data) return <div>데이터가 존재하지 않습니다</div>;
  const productList: IItem[] = [];
  for (let item of data.data) {
    productList.push({
      bottomData: {
        title: item.product.productName,
        score: item.product.avarageScore,
        reviewCount: item.product.reviewCount,
        writer: item.product.nickName,
        src: item.product.titleImg,
        pressBtnInfo: {
          tradeListPath: `/orderDetail/${item.product.id}`,
          move: item.product.tradeStatus == 2 ? "locationCheck" : "tradeCancel",
          onClick: () => {
            if (item.product.tradeStatus == 2)
              navigate(`/locationCheck/${item.product.id}`);
          },
        },
      },
      topData: { state: item.product.tradeStatus == 2 ? "trading" : "traded" },
    });
  }
  return (
    <div>
      <Header />
      <SingleTextBox>주문내역</SingleTextBox>
      <CenterBody>
        {productList.map((item, idx) => (
          <Item
            key={idx}
            bottomData={{
              title: item.bottomData.title,
              score: item.bottomData.score,
              reviewCount: item.bottomData.reviewCount,
              writer: item.bottomData.writer,
              src: item.bottomData.src,
              isHeartFull: item.bottomData.isHeartFull,
              pressBtnInfo: {
                tradeListPath: item.bottomData.pressBtnInfo?.tradeListPath
                  ? item.bottomData.pressBtnInfo.tradeListPath
                  : "",
                move: item.bottomData.pressBtnInfo?.move,
                onClick: item.bottomData.pressBtnInfo?.onClick,
              },
            }}
            topData={{ state: item.topData?.state, date: item.topData?.date }}
            path={item.path}
            onClickAll={item.onClickAll}
            onClickClose={item.onClickClose}
          />
        ))}
        <div className="py-2"></div>
      </CenterBody>
      <MenuBar />
    </div>
  );
};

export default OrderListPage;
