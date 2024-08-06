import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useLocationSend = (lat: number, lng: number, isStart: boolean) => {
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["location", "post", "delivery"],
    queryFn: async () => {
      try {
        const result = await axios("/api/delivery/locationSend", {
          method: "post",
          withCredentials: true,
          data: { lat, lng },
        });

        return result;
      } catch (err) {
        console.error(err);
      }
    },
    refetchInterval: 30000,
    refetchIntervalInBackground: true,
    enabled: isStart,
  });
  return { data, isPending, isFetching };
};

export default useLocationSend;
