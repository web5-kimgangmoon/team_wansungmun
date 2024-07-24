interface IProps {
  children: string;
}

const TabBtn = ({ children }: IProps): JSX.Element => {
  return (
    <button className="pl-4">
      <div>{children}</div>
    </button>
  );
};

export default TabBtn;
