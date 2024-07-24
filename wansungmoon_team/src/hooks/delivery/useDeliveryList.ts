import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useDeliveryList = (deliveryId: number) => {
  const { data, isPending } = useQuery({
    queryKey: ["list", "get", "delivery"],
    queryFn: async () => {
      try {
        if (deliveryId === -1) return undefined;
        const List = await axios.get("api/delivery/getList", {
          withCredentials: true,
          params: { deliveryId },
        });

        return List.data;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending };
};

export default useDeliveryList;
