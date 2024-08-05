const MyInfo = () => {
  return (
    <div className="m-2">
      <div>
        <div className="h-4"></div>
        <div className="text-2xl font-black flex justify-center m-2">
          닉네임
        </div>
        <div className="flex justify-center m-2">010-1234-5678</div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="flex justify-center font-black text-2xl">1</div>
          <div className="flex justify-center text-sm">내가 남긴후기</div>
        </div>
        <div className="flex-1">
          <div className="flex justify-center font-black text-2xl">10</div>
          <div className="flex justify-center text-sm">판매 중인 상품</div>
        </div>
        <div className="flex-1">
          <div className="flex justify-center font-black text-2xl">10,000</div>
          <div className="flex justify-center text-sm">잔여포인트</div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
