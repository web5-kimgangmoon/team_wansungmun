import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useDeliveryComplete = (productId: number) => {
  const { data, isPending, mutate } = useMutation({
    mutationKey: ["complete", "post", "delivery"],
    mutationFn: async () => {
      try {
        const detail = await axios("/api/delivery/deliveryComplete", {
          method: "post",
          withCredentials: true,
          data: { productId },
        });
        return detail;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending, mutate };
};

export default useDeliveryComplete;
