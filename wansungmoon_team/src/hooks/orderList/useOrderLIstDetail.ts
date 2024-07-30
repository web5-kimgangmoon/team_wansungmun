import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useOrderListDetail = (productId: number) => {
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["get", "orderList", "detail"],
    queryFn: async () => {
      try {
        const product = await axios.get("api/orderList/getDetail", {
          withCredentials: true,
          params: { productId },
        });
        return product;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending, isFetching };
};

export default useOrderListDetail;
