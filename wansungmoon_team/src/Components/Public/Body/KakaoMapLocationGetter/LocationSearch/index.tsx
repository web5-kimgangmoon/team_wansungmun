import useKakaoLoader from "../hooks/useKakaoLoader";
import { MouseEvent, useRef } from "react";
import { useState } from "react";
import Comp from "./Comp";

interface IProps {
  mapLocation: { lat: number; lng: number };
  setMapLocation: ({ lat, lng }: { lat: number; lng: number }) => void;
  setMapAddress: React.Dispatch<React.SetStateAction<string>>;
}

const KakaoMapLocationGetter = ({
  mapLocation,
  setMapLocation,
  setMapAddress,
}: IProps) => {
  useKakaoLoader();
  const [initail, setInital] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);
  if (!initail) setInital(mapLocation);

  const clickMarking = (
    target: kakao.maps.Map,
    e: kakao.maps.event.MouseEvent
  ) => {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2Address(
      e.latLng.getLng(),
      e.latLng.getLat(),
      (result, status) => {
        if (result) {
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
      initailLocation={initail as { lat: number; lng: number }}
      clickMarking={clickMarking}
    />
  );
};

export default KakaoMapLocationGetter;
