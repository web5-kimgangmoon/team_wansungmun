import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useDeliveryDetail = (productId: number) => {
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["list", "get", "delivery"],
    queryFn: async () => {
      try {
        const detail = await axios.get("/api/delivery/getDetail", {
          withCredentials: true,
          params: { productId },
        });
        return detail;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending, isFetching };
};

export default useDeliveryDetail;
