import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFixed = (productId: number) => {
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["getFixed", "locationCheck"],
    queryFn: async () => {
      try {
        const product = await axios.get("api/locationCheck/getFixed", {
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

export default useFixed;
