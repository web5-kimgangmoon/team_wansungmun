import { useState } from "react";

const useRecommend = () => {
  const [recommendIndex, setRecommendIndex] = useState<number>(-1);
  return { recommendIndex, setRecommendIndex };
};

export default useRecommend;
