import { useState } from "react";
import CanMeet from "../Temp/CanMeet";
import DealIng from "../Temp/DealIng";

interface IProps {
  title: string;
  writer: string;
}

const List = () => {
  const [data, setData] = useState([
    { title: "중고자전거-싸게파는중!!!", writer: "자전거팜" },
    { title: "2중고자전거-싸게파는중!!!", writer: "2자전거팜" },
  ]);
  return (
    <div className="border-t mt-2">
      <div className="flex mx-5 mt-3">
        <div className="w-[7.5rem] h-[7.5rem] border">사진</div>
        <div className="m-1">
          <div className="h-[2.5rem] items-center">
            글제목
            {/* {data.title[0]} */}
          </div>
          <div className="flex h-[2.5rem] items-center justify-between">
            <div>⭐</div>
            <div>4.4(15)</div>
            <div className="">
              작성자
              {/* {data.writer[0]} */}
            </div>
          </div>
          <div className="flex h-[2.5rem] items-center justify-between">
            <div className="flex">
              <DealIng></DealIng>
              <CanMeet></CanMeet>
            </div>
            <div>❤</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
