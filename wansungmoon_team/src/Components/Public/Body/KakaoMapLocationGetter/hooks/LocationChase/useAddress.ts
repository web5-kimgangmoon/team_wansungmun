import { useState } from "react";

const useAddress = () => {
  const [addr, setAddr] = useState<string>("주소를 찾지 못했습니다");

  const setAddress = (
    lat: number,
    lng: number,
    service: kakao.maps.services.Geocoder
  ) => {
    service.coord2Address(lng, lat, (result, status) => {
      if (status === "OK") {
        setAddr(result[0].address.address_name);
      }
    });
  };
  // 이대로 못받아옵니다. locationChase로 전달해주세요
  return { addr, setAddress };
};

export default useAddress;
