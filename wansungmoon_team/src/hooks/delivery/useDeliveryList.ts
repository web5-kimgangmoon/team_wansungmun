import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useDeliveryList = () => {
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["list", "get", "delivery"],
    queryFn: async () => {
      try {
        const list = await axios.get("/api/delivery/getList", {
          withCredentials: true,
        });

        return list;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending, isFetching };
};

export default useDeliveryList;
