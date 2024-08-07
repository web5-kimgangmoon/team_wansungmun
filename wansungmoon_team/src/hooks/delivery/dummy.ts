import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useLocationSwitch = (deliveryId: number) => {
  const { mutate, data, isPending } = useMutation({
    mutationKey: ["location", "get", "stop", "delivery"],
    mutationFn: async () => {
      try {
        const result = await axios.post("/api/delivery/deliverySwitch", {
          withCredentials: true,
          params: { deliveryId },
        });

        return result.data;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { mutate, data, isPending };
};

export default useLocationSwitch;
