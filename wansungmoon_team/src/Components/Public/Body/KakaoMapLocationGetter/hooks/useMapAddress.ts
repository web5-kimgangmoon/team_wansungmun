import { useState } from "react";

const useMapAddress = () => {
  const [mapAddress, setMapAddress] = useState<string>("");

  return {
    mapAddress,
    setMapAddress,
  };
};

export default useMapAddress;
