import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategoryProducts = (categoryId: number) => {
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["category", "product", "get"],
    queryFn: async () => {
      try {
        const products = await axios.get("/api/category/getProducts", {
          withCredentials: true,
          params: { categoryId },
        });

        return products;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending, isFetching };
};

export default useCategoryProducts;
