import { Map, MapMarker } from "react-kakao-maps-sdk";

interface IProps {
  initailLocation: { lat: number; lng: number };
  mapLocation: { lat: number; lng: number };
  clickMarking: (
    target: kakao.maps.Map,
    e: kakao.maps.event.MouseEvent
  ) => void;
}

const KakaoMapLocationGetter = ({
  initailLocation,
  mapLocation,
  clickMarking,
}: IProps) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <Map
          center={initailLocation}
          style={{ width: "100%", height: "15rem" }}
          level={3}
          onClick={clickMarking}
        >
          <MapMarker position={mapLocation ?? mapLocation} />
        </Map>
      </div>
    </div>
  );
};

export default KakaoMapLocationGetter;
