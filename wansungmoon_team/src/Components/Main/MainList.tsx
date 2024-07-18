import MainItem from "./MainItem";

interface IProps {
  titleArr: string[];
}

const MainList = ({ titleArr }: IProps) => {
  return (
    <div className="flex justify-between mb-2">
      {titleArr.map((title) => (
        <MainItem>{title}</MainItem>
      ))}
    </div>
  );
};

export default MainList;
