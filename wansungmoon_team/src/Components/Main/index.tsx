import Main from "./Main";
import useCategory from "../../hooks/useCategory";

interface IProps {}

const Container = () => {
  const { data, isFetching } = useCategory();
  if (isFetching) return <div>다운중</div>;
  return (
    <div>
      <Main cateArr={data} />
    </div>
  );
};

export default Container;
