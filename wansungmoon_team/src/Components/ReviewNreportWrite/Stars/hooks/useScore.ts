import { useState } from "react";

const useScore = () => {
  const [score, setScore] = useState<number>(1);
  return { score, setScore };
};

export default useScore;
