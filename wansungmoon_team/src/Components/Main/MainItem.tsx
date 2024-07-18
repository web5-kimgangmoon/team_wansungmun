interface IProps {
  children: string;
}

const MainItem = ({ children }: IProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-cusGray w-[3rem] h-[3rem] rounded-xl"></div>
      <div className="text-xs text-center font-bold">{children}</div>
    </div>
  );
};

export default MainItem;
