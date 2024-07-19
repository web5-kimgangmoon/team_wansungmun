interface IProps {}

const Board = () => {
  return (
    <div className="border-t mt-2 flex justify-center">
      <input type="checkbox"></input>
      <div className="flex m-3">
        <div className="w-[7.5rem] h-[7.5rem] border">사진</div>
        <div className="m-1">
          <div className="h-[2.5rem] items-center">중고자전거- 싸게파는중!!!</div>
          <div className="flex h-[2.5rem] items-center justify-between">
            <div>⭐</div>
            <div>4.4(15)</div>
            <div className="">나는야작성자</div>
          </div>
          <div className="flex h-[2.5rem] items-center justify-between">
            <div className="flex">
              <div>ㅁ</div>
              <div>ㅁ</div>
            </div>
            <div>❤</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
