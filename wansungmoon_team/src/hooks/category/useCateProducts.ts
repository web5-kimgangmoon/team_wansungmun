import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategoryProducts = (categoryId: number) => {
  const { data, isPending } = useQuery({
    queryKey: ["category", "product", "get"],
    queryFn: async () => {
      try {
        const products = await axios.get("api/category/getProducts", {
          withCredentials: true,
          params: { categoryId },
        });

        return products.data;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending };
};

export default useCategoryProducts;
