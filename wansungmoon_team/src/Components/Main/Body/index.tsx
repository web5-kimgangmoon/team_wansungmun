import Main from "./Main";
import useCategory from "../../../hooks/category/useCategory";

interface IProps {}

const Container = () => {
  const { data, isFetching, isPending } = useCategory();
  if (isFetching || isPending) return <div>다운중</div>;
  if (!data || !data.data) return <div>데이터가 없습니다!</div>;
  return (
    <div>
      <Main cateArr={data.data} />
    </div>
  );
};

export default Container;
