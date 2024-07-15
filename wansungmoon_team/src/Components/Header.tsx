import Logo from "../img/Complete Moon1.png";

function Header() {
  return (
    <div className="flex justify-between m-3">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="mt-3">
        <button className="font-bold text-xs ">로그인</button>
      </div>
    </div>
  );
}

export default Header;
