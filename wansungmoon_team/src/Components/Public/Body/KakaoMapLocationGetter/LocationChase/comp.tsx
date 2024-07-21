import { Map, MapMarker } from "react-kakao-maps-sdk";
import { MouseEvent, useRef } from "react";
import useKakaoLoader from "../hooks/useKakaoLoader";
// import  from "react-kakao-maps-sdk";

interface IProps {
  destination: { lat: number; lng: number };
  start: { lat: number; lng: number };
}

const LocationChase = ({ destination, start }: IProps) => {
  useKakaoLoader();
  const map = useRef<kakao.maps.Map>(null);
  let moveCenter = () => {
    const startP = new kakao.maps.LatLng(start.lat, start.lng);
    const destinationP = new kakao.maps.LatLng(
      destination.lat,
      destination.lng
    );
    console.log("s");
    const boundsOne = new kakao.maps.LatLngBounds(startP, destinationP);
    const boundsTwo = new kakao.maps.LatLngBounds(destinationP, startP);
    const theBounds = boundsOne.isEmpty() ? boundsTwo : boundsOne;

    map.current?.setBounds(theBounds);
    moveCenter = () => {};
  };
  return (
    <div className="w-full">
      <div className="w-full">
        <Map
          //   onTileLoaded={moveCenter}
          onTileLoaded={moveCenter}
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: "100%", height: "15rem" }}
          ref={map}
        >
          <MapMarker position={start} title="출발지">
            출발지
          </MapMarker>
          <MapMarker position={destination} title="목적지" />
        </Map>
      </div>
    </div>
  );
};

export default LocationChase;
