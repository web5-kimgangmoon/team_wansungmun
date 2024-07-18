import { Link } from "react-router-dom";
import LongButton from "../Public/Body/LongButton";
import MenuBar from "../Public/Footer/MenuBar";

const Regist = () => {
  return (
    <div className="container">
      {/* <div className="min-h-[200px]"></div> */}
      <ul className="flex flex-col gap-[1rem] min-h-[400px] justify-end">
        <li>
          <Link to="/regist/kakao">
            <LongButton textColor="white" bgColor="yellow">
              카카오로 계속하기
            </LongButton>
          </Link>
        </li>
        <li>
          <Link to="/regist/email">
            <LongButton textColor="black" bgColor="gray">
              이메일로 계속하기
            </LongButton>
          </Link>
        </li>
      </ul>
      <MenuBar />
    </div>
  );
};

export default Regist;
