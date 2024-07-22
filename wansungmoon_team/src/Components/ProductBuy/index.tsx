import LongButton from "../Public/Body/LongButton";
import qwer from "../ProductPage/img/qwer.png";

interface IProps {}

const Buy = () => {
  return (
    <div>
      <div>결제하기</div>
      <div className="border-b">
        <div className="flex p-3">
          <div className="w-[30%]">
            <img src={qwer} alt="" />
          </div>
          <div className="pl-2">
            <div>
              <div className="text-xl font-bold">QWER 앨범 팔아요</div>
            </div>
            <div className="pt-5">
              <div className="font-bold">150,000 원</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex p-1">
          <div className="font-black">거래 방법</div>
          <div className="pl-3">일반택배(선물)</div>
        </div>
        <div>
          <div className="p-1 font-black">배송지</div>
          <div className="flex gap-3 p-2">
            <input type="text" className="bg-cusGray rounded-2xl pl-3 w-[80%]"></input>
            <div className="w-[15%]">
              <LongButton textColor="black" bgColor="gray">
                등록
              </LongButton>
            </div>
          </div>
          <div className="flex p-1">
            <div className="pl-1">
              <input type="checkbox" />
            </div>
            <div className="pl-3">안심번호 사용</div>
          </div>
        </div>
        <div className="p-1 border-b">
          <div className="font-bold">거래 요청사항</div>
          <div className="text-sm py-1">판매자에게 전달되는 요청사항입니다.</div>
          <div className="p-2">
            <input type="text" placeholder="예) 포장 꼼꼼하게 부탁드려요" className="bg-cusGray rounded-2xl w-full" />
          </div>
        </div>
      </div>
      <div className="border-b">
        <div className="p-1">
          <div>Moon Point</div>
          <div className="flex p-2">
            <input type="text" className="bg-cusGray w-[75%] rounded-2xl" />
            <div className="w-[25%] pl-2">
              <LongButton textColor="black" bgColor="gray">
                전액사용
              </LongButton>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <LongButton textColor="white" bgColor="red">
        구매하기
      </LongButton>
    </div>
  );
};

export default Buy;
