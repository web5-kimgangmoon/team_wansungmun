import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useLog = (productId: number) => {
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["locationCheck", "get", "log"],
    queryFn: async () => {
      try {
        const result = await axios("/api/locationCheck/get", {
          method: "get",
          withCredentials: true,
          params: { productId },
        });

        return result;
      } catch (err) {
        console.error(err);
      }
    },
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
  });
  return { data, isPending, isFetching };
};

export default useLog;
