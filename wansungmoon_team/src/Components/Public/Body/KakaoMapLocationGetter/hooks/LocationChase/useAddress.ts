import { useState } from "react";

const useAddress = (lat: number, lng: number) => {
  const [addr, setAddr] = useState<{ lat: number; lng: number; addr: string }>({
    lat,
    lng,
    addr: "주소를 찾지 못했습니다",
  });

  const setAddress = (
    lat: number,
    lng: number,
    service: kakao.maps.services.Geocoder
  ) => {
    service.coord2Address(lng, lat, (result, status) => {
      if (status === "OK") {
        setAddr({ ...addr, addr: result[0].address.address_name } as {
          lat: number;
          lng: number;
          addr: string;
        });
        // console.log("dd");
      }
    });
  };
  // 이대로 못받아옵니다. locationChase로 전달해주세요
  return { addr, setAddress, setAddr };
};

export default useAddress;
