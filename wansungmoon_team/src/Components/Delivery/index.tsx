import { useEffect, useState } from "react";
import useMapLocation from "../Public/Body/KakaoMapLocationGetter/hooks/useMapLocation";
import Comp from "./comp";
import useDeliveryList from "../../hooks/delivery/useDeliveryList";
import { useParams } from "react-router-dom";
import { ListTy } from "./DeliveryZip/DeliveryList";
import useLocationSend from "../../hooks/delivery/useLocationSend";

const DeliveryListPage = () => {
  // const { id } = useParams();
  // let deliveryId = id ? (Number.isNaN(+id) ? -1 : +id) : -1;
  const { data, isPending, isFetching } = useDeliveryList();
  const { mapLocation } = useMapLocation();
  console.log(mapLocation);
  const [isDeliverying, setIsDeliverying] = useState<boolean>(false);
  useLocationSend(mapLocation.lat, mapLocation.lng, isDeliverying);
  if (isPending || isFetching) return <div>로딩중</div>;
  if (!data || !data.data) return <div>데이터를 불러오는데 실패했습니다</div>;
  let list: ListTy = [];
  if (data) {
    for (let item of data.data) {
      list.push({
        address: item.tradeLocation ? item.tradeLocation : "확인불가",
        id: item.id,
        name: item.name,
        phone: item.tradeReceipts[0].phone
          ? item.tradeReceipts[0].phone
          : "확인불가",
        isDeliverying:
          item.deliveryStatus == 0 || item.deliveryStatus == 1 ? true : false,
      });
      // console.log(
      //   new Date(new Date(item.createdAt).getTime() - Date.now()).getTime() <
      //     86400000
      // );
    }
  }

  return (
    <div>
      <Comp
        btn={{
          isDeliverying,
          onClick: () => {
            setIsDeliverying(!isDeliverying);
          },
        }}
        list={list ? list : []}
      />
    </div>
  );
};

export default DeliveryListPage;
