import useKakaoLoader from "../hooks/useKakaoLoader";
import Comp from "./comp";

interface IProps {
  destination: { lat: number; lng: number };
  start: { lat: number; lng: number };
  route?: { lat: number; lng: number; addr: string };
  current?: { lat: number; lng: number; addr: string };
  getCurrent?: {
    setAddress: (
      lat: number,
      lng: number,
      service: kakao.maps.services.Geocoder
    ) => void;
  };
  getRoute?: {
    setAddress: (
      lat: number,
      lng: number,
      service: kakao.maps.services.Geocoder
    ) => void;
  };
}

const LocationChase = ({
  destination,
  start,
  route,
  current,
  getCurrent,
  getRoute,
}: IProps) => {
  useKakaoLoader();
  const setAddress = (
    lat: number,
    lng: number,
    setAddr: ({}) => {},
    service: kakao.maps.services.Geocoder
  ) => {
    service.coord2Address(lng, lat, (result, status) => {
      if (status === "OK") {
        setAddr({ addr: result[0].address.address_name } as {
          lat: number;
          lng: number;
          addr: string;
        });
        // console.log("dd");
      }
    });
  };
  const moveCenter = (e: kakao.maps.Map) => {
    const startP = new kakao.maps.LatLng(start.lat, start.lng);
    const destinationP = new kakao.maps.LatLng(
      destination.lat,
      destination.lng
    );
    const addressGetter = new kakao.maps.services.Geocoder();
    if (current) {
      e.setCenter(new kakao.maps.LatLng(current.lat, current.lng));
      console.log("주소");
      if (current.addr === "주소를 찾지 못했습니다")
        getCurrent?.setAddress(current.lat, current.lng, addressGetter);
    } else {
      e.setCenter(startP);
    }

    const mapBounds = e.getBounds();
    mapBounds.extend(destinationP);
    mapBounds.extend(startP);
    if (route) {
      mapBounds.extend(new kakao.maps.LatLng(route.lat, route.lng));
      if (route.addr === "주소를 찾지 못했습니다")
        getRoute?.setAddress(route.lat, route.lng, addressGetter);
    }
    e.panTo(mapBounds);
  };
  return (
    <Comp
      destination={destination}
      start={start}
      route={route}
      current={current}
      moveCenter={moveCenter}
    />
  );
};

export default LocationChase;
