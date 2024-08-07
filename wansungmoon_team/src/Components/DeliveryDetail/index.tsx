import { useNavigate, useParams } from "react-router-dom";
import useDeliveryDetail from "../../hooks/delivery/useDeliveryDetail";
import Comp from "./comp";
import valueCheck from "../../lib/valueCheck";
import useDeliveryComplete from "../../hooks/delivery/useDeliveryComplete";

const DeliveryDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { data, isPending, isFetching } = useDeliveryDetail(
    valueCheck(productId)
  );
  const deliveryComplete = useDeliveryComplete(valueCheck(productId));
  if (isPending || isFetching) return <div>로딩중</div>;
  if (!data || !data.data) return <div>데이터를 불러오는데 실패했습니다</div>;
  return (
    <Comp
      deliveryContent={{
        address: data.data.tradeReceipts[0].destination,
        detailAddress: data.data.tradeReceipts[0].destinationDetail,
        name: data.data.tradeReceipts[0].nickname,
        phone: data.data.tradeReceipts[0].phone_num,
        request: data.data.tradeReceipts[0].trade_request,
      }}
      detailPic={{ titleImg: data.data.titleImg }}
      deliveryBtn={{
        deliveryStatus: data.data.deliveryStatus,
        onClick:
          data.data.deliveryStatus === 1 || data.data.deliveryStatus === 2
            ? () => {
                deliveryComplete.mutate();
                navigate(0);
              }
            : () => {},
      }}
    />
  );
};

export default DeliveryDetail;
