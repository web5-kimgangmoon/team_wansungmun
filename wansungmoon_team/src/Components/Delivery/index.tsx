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
  const { data, isPending } = useDeliveryList();
  const { mapLocation } = useMapLocation();
  console.log(mapLocation);
  const [isDeliverying, setIsDeliverying] = useState<boolean>(false);
  const sendResult = useLocationSend(
    mapLocation.lat,
    mapLocation.lng,
    isDeliverying
  );
  if (isPending) return <div>로딩중</div>;
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
      });
      const a = new Date();
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
