import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useLoginCheck = () => {
  const { data } = useMutation({
    mutationKey: ["loginCheck", "get"],
    mutationFn: async () => {
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
  return { data };
};

export default useLoginCheck;
