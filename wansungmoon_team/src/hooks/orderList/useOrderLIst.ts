import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useOrderList = () => {
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["get", "orderList"],
    queryFn: async () => {
      try {
        const product = await axios.get("api/orderList/get", {
          withCredentials: true,
        });
        return product;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending, isFetching };
};

export default useOrderList;
