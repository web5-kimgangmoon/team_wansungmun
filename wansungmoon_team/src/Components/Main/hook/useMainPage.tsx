import { useState } from "react";

const useMainPage = () => {
  const [mainPage, setMainPage] = useState<number>(1);
  return { mainPage, setMainPage };
};

export default useMainPage;
