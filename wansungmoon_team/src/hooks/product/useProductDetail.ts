import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProductDetail = (productId: number) => {
  const { data, isPending, status } = useQuery({
    queryKey: ["product", "get", "detail"],
    queryFn: async () => {
      try {
        const product = await axios.get("api/productInfo/detail", {
          withCredentials: true,
          params: { productId },
        });
        return product;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending };
};

export default useProductDetail;
