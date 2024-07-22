import useKakaoLoader from "../hooks/useKakaoLoader";
import Comp from "./comp";

interface IProps {
  destination: { lat: number; lng: number };
  start: { lat: number; lng: number };
  route?: { lat: number; lng: number };
  getStart?: {
    setAddress: (
      lat: number,
      lng: number,
      service: kakao.maps.services.Geocoder
    ) => void;
  };
  getDestination?: {
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
  getDestination,
  getRoute,
  getStart,
}: IProps) => {
  useKakaoLoader();
  const moveCenter = (e: kakao.maps.Map) => {
    const startP = new kakao.maps.LatLng(start.lat, start.lng);
    const destinationP = new kakao.maps.LatLng(
      destination.lat,
      destination.lng
    );
    const addressGetter = new kakao.maps.services.Geocoder();
    if (getDestination)
      getDestination.setAddress(
        destination.lat,
        destination.lng,
        addressGetter
      );
    if (getStart) {
      getStart.setAddress(start.lat, start.lng, addressGetter);
    }
    if (getRoute && route)
      getRoute.setAddress(route.lat, route.lng, addressGetter);
    if (route) {
      e.setCenter(new kakao.maps.LatLng(route.lat, route.lng));
    } else {
      e.setCenter(startP);
    }
    const mapBounds = e.getBounds();
    mapBounds.extend(destinationP);
    mapBounds.extend(startP);
    if (route) {
      mapBounds.extend(new kakao.maps.LatLng(route.lat, route.lng));
    }
    e.panTo(mapBounds);
  };
  return (
    <Comp
      destination={destination}
      start={start}
      route={route}
      moveCenter={moveCenter}
    />
  );
};

export default LocationChase;
