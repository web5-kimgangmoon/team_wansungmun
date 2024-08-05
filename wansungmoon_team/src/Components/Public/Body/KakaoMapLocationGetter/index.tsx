import useKakaoLoader from "./hooks/useKakaoLoader";
import { MouseEvent } from "react";
import { useState } from "react";
import Comp from "./Comp";

interface IProps {
  mapLocation: { lat: number; lng: number };
  setMapLocation: ({ lat, lng }: { lat: number; lng: number }) => void;
  mapAddress?: string;
  setMapAddress: React.Dispatch<React.SetStateAction<string>>;
  isCenterMove?: boolean;
}

const KakaoMapLocationGetter = ({
  mapLocation,
  setMapLocation,
  setMapAddress,
}: IProps) => {
  useKakaoLoader();
  const [isEnableMarking, setIsEnableMarking] = useState<boolean>(false);
  const changeIsEnableMarking = (e: MouseEvent<HTMLButtonElement>) => {
    setIsEnableMarking(!isEnableMarking);
  };
  const clickMarking = (
    target: kakao.maps.Map,
    e: kakao.maps.event.MouseEvent
  ) => {
    console.log(kakao);
    if (!isEnableMarking) return;
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2Address(
      e.latLng.getLng(),
      e.latLng.getLat(),
      (result, status) => {
        if (result.length > 0) {
          if (status === "OK") {
            setMapAddress(result[0].address?.address_name);
          }
        }
      }
    );
    setMapLocation({ lat: e.latLng.getLat(), lng: e.latLng.getLng() });
  };
  return (
    <Comp
      mapLocation={mapLocation}
      changeIsEnableMarking={changeIsEnableMarking}
      isEnableMarking={isEnableMarking}
      clickMarking={clickMarking}
    />
  );
};

export default KakaoMapLocationGetter;
