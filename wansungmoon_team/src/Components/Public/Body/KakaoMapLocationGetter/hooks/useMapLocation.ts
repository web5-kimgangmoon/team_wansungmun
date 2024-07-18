import { useEffect, useState } from "react";

const useMapLocation = () => {
  const [mapLocation, setMapLocation] = useState<{ lat: number; lng: number }>({
    lat: 33.5563,
    lng: 126.79581,
  });
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          setMapLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }),
        null,
        { timeout: undefined }
      );
    }
  }, []);

  return {
    mapLocation,
    setMapLocation,
  };
};

export default useMapLocation;
