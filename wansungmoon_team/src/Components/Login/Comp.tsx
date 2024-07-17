import { Link } from "react-router-dom";

const Login = () => {
  return (
    <ul>
      <li>
        <button className="bg-yellow-300">카카오로 계속하기</button>
      </li>
      <li>
        <button className="bg-gray-500">
          <Link to={"/login/login_email"}>이메일로 계속하기</Link>
        </button>
      </li>
    </ul>
  );
};

export default Login;
