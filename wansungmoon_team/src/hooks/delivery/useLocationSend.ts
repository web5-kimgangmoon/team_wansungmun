import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useLocationSend = (lat: number, lng: number, isStart: boolean) => {
  const { data, isPending } = useQuery({
    queryKey: ["location", "post", "delivery"],
    queryFn: async () => {
      try {
        const result = await axios.post("api/delivery/locationSend", {
          withCredentials: true,
          data: { lat, lng },
        });

        return result;
      } catch (err) {
        console.error(err);
      }
    },
    refetchInterval: 300000,
    refetchIntervalInBackground: true,
    enabled: isStart,
  });
  return { data, isPending };
};

export default useLocationSend;
