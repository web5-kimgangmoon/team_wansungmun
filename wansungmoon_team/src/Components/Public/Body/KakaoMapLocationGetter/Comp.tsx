import { Map, MapMarker } from "react-kakao-maps-sdk";
import { MouseEvent } from "react";
import ClickButton from "../ClickButton";

interface IProps {
  mapLocation: { lat: number; lng: number };
  isEnableMarking: boolean;
  changeIsEnableMarking: (e: MouseEvent<HTMLButtonElement>) => void;
  clickMarking: (
    target: kakao.maps.Map,
    e: kakao.maps.event.MouseEvent
  ) => void;
}

const KakaoMapLocationGetter = ({
  mapLocation,
  isEnableMarking,
  changeIsEnableMarking,
  clickMarking,
}: IProps) => {
  return (
    <div className="w-full">
      <div className="pb-1">
        <ClickButton
          textColor="white"
          bgColor={isEnableMarking ? "red" : "blue"}
          onClick={changeIsEnableMarking}
        >
          {isEnableMarking ? "마커 삽입중" : "마커 삽입전환"}
        </ClickButton>
      </div>
      <div className="w-full">
        <Map
          center={mapLocation}
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
