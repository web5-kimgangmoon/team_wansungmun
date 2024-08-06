import { useParams } from "react-router-dom";
import useFixed from "../../../hooks/locationCheck/useFixed";
import useLog from "../../../hooks/locationCheck/useLog";
import Comp, { IProps as ILocationInfo } from "./comp";
import valueCheck from "../../../lib/valueCheck";

const LocationCheck = () => {
  const { productId } = useParams();
  const log = useLog(valueCheck(productId));
  const fixed = useFixed(valueCheck(productId));
  if (log.isPending || log.isFetching || fixed.isFetching || fixed.isPending)
    return <div>로딩중</div>;
  if (
    !log.data ||
    !fixed.data ||
    !log.data.data ||
    !fixed.data.data ||
    !log.data.data.firstLog[0] ||
    !log.data.data.info[0] ||
    !log.data.data.product ||
    !log.data.data.destination ||
    !log.data.data.destinationDetail
  )
    return <div>데이터가 존재하지 않습니다</div>;
  console.log(log.data.data.firstLog[0].createdAt);
  const data: ILocationInfo = {
    createdAt: new Date(log.data.data.firstLog[0].createdAt),
    current: {
      lat: log.data.data.info[0].lat
        ? log.data.data.info[0].lat
        : fixed.data.data.product.latitude,
      lng: log.data.data.info[0].lng
        ? log.data.data.info[0].lng
        : fixed.data.data.product.longitude,
    },
    destination: {
      lat: fixed.data.data.latitude,
      lng: fixed.data.data.longitude,
      addr:
        fixed.data.data.destination + " " + fixed.data.data.destinationDetail,
    },
    route:
      log.data.data.info.length === 2
        ? {
            lat: log.data.data.info[1].lat as number,
            lng: log.data.data.info[1].lng as number,
          }
        : {
            lat: log.data.data.info[0].lat
              ? log.data.data.info[0].lat
              : fixed.data.data.product.latitude,
            lng: log.data.data.info[0].lng
              ? log.data.data.info[0].lng
              : fixed.data.data.product.longitude,
          },
    start: {
      lat: fixed.data.data.product.latitude,
      lng: fixed.data.data.product.longitude,
      addr: fixed.data.data.product.tradeLocation,
    },
  };
  return <Comp {...data} />;
};

export default LocationCheck;
