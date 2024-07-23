import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useLoginCheck = () => {
  const { data, mutate } = useMutation({
    mutationKey: ["loginCheck", "get"],
    mutationFn: async (number: number) => {
      try {
        const isLogin = await axios.get("api/logCheck", {
          withCredentials: true,
        });
        return isLogin.data;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, mutate };
};

export default useLoginCheck;
