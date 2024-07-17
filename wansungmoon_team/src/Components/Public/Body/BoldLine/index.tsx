interface IProps {
  children: string;
}

const BoldLine = ({ children }: IProps) => {
  return <div className="py-1 text-sm font-bold">{children}</div>;
};

export default BoldLine;
