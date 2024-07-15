import home from "../svg/home.svg";
import search from "../svg/search.svg";
import heart from "../img/icons8-하트-50.png";
import order from "../img/icons8-check-list-50.png";
import mypage from "../img/icons8-사람-64.png";

function Menu() {
  return (
    <div className="flex border-t-2 border-black">
      <div className="flex-1 text-center font-bold text-xs">
        <img src={home} alt="" />
        <div>홈</div>
      </div>
      <div className="flex-1 text-center font-bold text-xs">
        <img src={search} alt="" />
        <div>검색하기</div>
      </div>
      <div className="flex-1 text-center font-bold text-xs">
        <img src={heart} alt="" className="w-[28px] h-[28px]" />
        <div>즐겨찾기</div>
      </div>
      <div className="flex-1 text-center font-bold text-xs">
        <img src={order} alt="" className="w-[28px] h-[28p28" />
        <div>주문내역</div>
      </div>
      <div className="flex-1 text-center font-bold text-xs">
        <img src={mypage} alt="" className="w-[38px] h-[38px] m-0" />
        <div>내 정보</div>
      </div>
    </div>
  );
}

export default Menu;
