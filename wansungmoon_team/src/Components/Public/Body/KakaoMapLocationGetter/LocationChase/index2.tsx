import useKakaoLoader from "../hooks/useKakaoLoader";
import Comp from "./comp2";

interface IAddr {
  lat: number;
  lng: number;
  addr: string;
}

interface IProps {
  destination: {
    lat: number | undefined;
    lng: number | undefined;
    addr: string;
  };
  start: { lat: number | undefined; lng: number | undefined; addr: string };
  route?: { lat: number; lng: number; addr: string };
  current: { lat: number; lng: number; addr: string };
  setCurrent: (addr: IAddr) => void;
  setRoute?: (addr: IAddr) => void;
  setDestination: (addr: IAddr) => void;
  setStart: (addr: IAddr) => void;
}

const LocationChase = ({
  destination,
  start,
  route,
  current,
  setCurrent,
  setRoute,
  setDestination,
  setStart,
}: IProps) => {
  useKakaoLoader();
  const setAddress = (
    lat: number,
    lng: number,
    setAddr: (addr: IAddr) => void,
    service: kakao.maps.services.Geocoder
  ) => {
    service.coord2Address(lng, lat, (result, status) => {
      if (status === "OK") {
        setAddr({ addr: result[0].address.address_name } as {
          lat: number;
          lng: number;
          addr: string;
        });
        console.log(result);
      }
    });
  };
  const setLatLng = (
    addr: string,
    setAddr: (addr: IAddr) => void,
    service: kakao.maps.services.Geocoder
  ) => {
    service.addressSearch(addr, (result, status) => {
      if (status === "OK") {
        setAddr({ addr, lng: +result[0].address.x, lat: +result[0].address.y });
        console.log(result);
      }
    });
  };
  const moveCenter = async (e: kakao.maps.Map) => {
    console.log(current);
    const addressGetter = new kakao.maps.services.Geocoder();
    // if (current && setCurrent) {
    e.setCenter(new kakao.maps.LatLng(current.lat, current.lng));
    if (current.addr === "주소를 찾지 못했습니다")
      await setAddress(current.lat, current.lng, setCurrent, addressGetter);
    // } else {
    // e.setCenter(new kakao.maps.LatLng(35.56496830314491, 126.93990862062978));
    // }
    if (!start.lat && !start.lng)
      await setLatLng(start.addr, setStart, addressGetter);
    if (!destination.lat && !destination.lng)
      await setLatLng(destination.addr, setDestination, addressGetter);
    const mapBounds = e.getBounds();
    console.log(e.getCenter());
    if (start.lat && start.lng)
      mapBounds.extend(new kakao.maps.LatLng(start.lat, start.lng));
    if (destination.lat && destination.lng)
      mapBounds.extend(new kakao.maps.LatLng(destination.lat, destination.lng));
    if (route && setRoute) {
      mapBounds.extend(new kakao.maps.LatLng(route.lat, route.lng));
      if (route.addr === "주소를 찾지 못했습니다")
        await setAddress(route.lat, route.lng, setRoute, addressGetter);
    }
    console.log(e.getCenter());
    e.panTo(mapBounds);
  };
  return (
    <Comp
      destination={
        destination.lat && destination.lng
          ? (destination as { lat: number; lng: number })
          : undefined
      }
      start={
        start.lat && start.lng
          ? (start as { lat: number; lng: number })
          : undefined
      }
      route={route}
      current={current}
      moveCenter={moveCenter}
    />
  );
};

export default LocationChase;
