import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const CenterBody = ({ children }: IProps): JSX.Element => {
  return (
    <div className="container">
      <div className="">{children}</div>
    </div>
  );
};

export default CenterBody;
