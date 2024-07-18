import { Link } from "react-router-dom";
import KakaoBtn from "../Temp/KakaoBtn";
import Email from "../Temp/Email";
import LongButton from "../Public/Body/LongButton";
import MenuBar from "../Public/Footer/MenuBar";

const Login = () => {
  return (
    <div className="container">
      {/* <div className="min-h-[200px]"></div> */}
      <ul className="flex flex-col gap-[1rem] min-h-[400px] justify-end">
        <li>
          <Link to="/login/kakao">
            <LongButton textColor="white" bgColor="yellow">
              카카오로 계속하기
            </LongButton>
          </Link>
        </li>
        <li>
          <Link to="/login/email">
            <LongButton textColor="black" bgColor="gray">
              이메일로 계속하기
            </LongButton>
          </Link>
        </li>
        <div className="text-center text-sm">
          회원이 아니세요?
          <Link className="text-blueButton-default" to="/regist">
            회원가입
          </Link>
        </div>
      </ul>
      <MenuBar
      // inactiveElement={0}
      />
    </div>
  );
};

export default Login;
