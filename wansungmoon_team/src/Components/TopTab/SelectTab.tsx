import { useState } from "react";
import MiniDropdown from "./MiniDrop";

interface IProps {}

const SelectTab = () => {
  const [view, setView] = useState(false);
  return (
    <div>
      <div className="w-5/6 mx-auto my-2">
        <div className="flex justify-between">
          <div className="flex">
            <input type="checkbox"></input>
            <div>직거래 가능만</div>
          </div>
          <div className="flex gap-4">
            <div>
              <ul
                onClick={() => {
                  setView(!view);
                }}
              >
                {view ? "접기" : "정렬방식"}
                {view && <MiniDropdown />}
              </ul>
            </div>
            <div>필터</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTab;
