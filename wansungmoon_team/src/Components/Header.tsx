import Logo from "../svgs/Moon.png";
import Svg from "../svgs/Complete Moon Market";
import LoginArea from "./LoginBtn/LoginBtn";
import { Link } from "react-router-dom";

interface IProps {}

const Header = (): JSX.Element => {
  return (
    <div className="p-2">
      <div className="flex justify-between p-2 border-b">
        <div className="flex relative">
          <Link to="/">
            <div className="w-24 absolute top-[0.5] left-[-1rem]">
              <img src={Logo} className="w-full" alt="" />
            </div>
          </Link>
          <div className="pl-12">
            <div className="w-28">
              <Svg />
            </div>
          </div>
        </div>
        {/* <div className="mt-3">
          <button className="font-bold text-sm ">로그인</button>
        </div> */}
        <LoginArea />
      </div>
    </div>
  );
};

export default Header;
