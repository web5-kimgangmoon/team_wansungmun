import { Link } from "react-router-dom";
import LongButton from "../Public/Body/LongButton";
import MenuBar from "../Public/Footer/MenuBar";

const Login = () => {
  const client_id = `${process.env.REACT_APP_KAKAO_API}`;
  // const navigate = useNavigate();
  // const url = new URL(
  //   `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000/login/kakao&response_type=code`
  // );
  return (
    <div className="container">
      <ul className="flex flex-col gap-[1rem] min-h-[400px] justify-end">
        <li>
          <LongButton
            textColor="white"
            bgColor="yellow"
            onClick={() => {
              // eslint-disable-next-line no-restricted-globals
              location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=http://l${process.env.REACT_APP_HOST}:3000/login/kakao&response_type=code`;
            }}
          >
            카카오로 계속하기
          </LongButton>
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
