import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useDeliveryList = (productId: number) => {
  const { data, isPending } = useQuery({
    queryKey: ["list", "get", "delivery"],
    queryFn: async () => {
      try {
        const detail = await axios.get("api/delivery/getDeatil", {
          withCredentials: true,
          params: { productId },
        });
        return detail;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending };
};

export default useDeliveryList;
