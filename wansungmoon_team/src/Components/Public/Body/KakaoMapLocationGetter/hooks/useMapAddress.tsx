import { useEffect, useState } from "react";

const useMapAddress = () => {
  const [mapAddress, setMapAddress] = useState<{
    address: string;
    detailAddress: string;
  }>({
    address: "",
    detailAddress: "",
  });

  return {
    mapAddress,
    setMapAddress,
    // initMapLocation,
  };
};

export default useMapAddress;
