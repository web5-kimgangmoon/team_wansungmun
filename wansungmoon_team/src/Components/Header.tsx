import { ReactComponent as Logo } from "../svgs/Complete Moon (1).svg";
import { ReactComponent as Name } from "../svgs/Complete Moon Market.svg";

function Header() {
  return (
    <div className="flex justify-between m-3">
      <div>
        <Logo></Logo>
        <Name></Name>
      </div>
      <div className="mt-3">
        <button className="font-bold text-xs ">로그인</button>
      </div>
    </div>
  );
}

export default Header;
