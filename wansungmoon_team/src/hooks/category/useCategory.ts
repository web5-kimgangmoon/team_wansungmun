import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategory = () => {
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["category", "get"],
    queryFn: async () => {
      try {
        const category = await axios.get("/api/category/get", {
          withCredentials: true,
        });
        return category;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending, isFetching };
};

export default useCategory;
