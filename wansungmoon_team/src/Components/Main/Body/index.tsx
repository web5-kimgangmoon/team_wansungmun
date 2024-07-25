import Main from "./Main";
import useCategory from "../../../hooks/category/useCategory";

interface IProps {}

const Container = () => {
  const { data, isFetching } = useCategory();
  if (isFetching || !data) return <div>다운중</div>;
  return (
    <div>
      <Main cateArr={data.data} />
    </div>
  );
};

export default Container;
