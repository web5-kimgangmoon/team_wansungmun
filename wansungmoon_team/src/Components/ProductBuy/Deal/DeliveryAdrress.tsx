import { AnyARecord } from "dns";
import Dropdown from "../../Public/Body/Dropdown";
import LongButton from "../../Public/Body/LongButton";
import AddAddress from "../Modal/AddAddress";
import { useState } from "react";

interface IProps {
  location: Array<{ id: number; location: string; locationDetail: string }>;
  locaValue: string;
  setLocaValue: (str: string) => void;
}

const DeliveryAdrress = ({ location, locaValue, setLocaValue }: IProps) => {
  let fulllocaArr: Array<[string, string]> = [];
  let loca: Array<string> = [];
  for (let i = 0; i < location.length; i++) {
    if (!location[i].location) continue;
    fulllocaArr.push([
      location[i].location,
      location[i].location + location[i].locationDetail,
    ]);
    // loca:
  }

  console.log(fulllocaArr);
  return (
    <div>
      <div className="px-2 font-black">배송지</div>
      <div className="gap-3 p-2">
        <div className="mb-2">
          <Dropdown
            name="myAddress"
            defaultStr="주소설정"
            options={
              fulllocaArr
              // fulllocaArr.map((item, idx) => [idx.toString(), item])
              // [loca[0], fulllocaArr[0]],
              // [loca[1], fulllocaArr[1]],
              // [loca[2], fulllocaArr[2]],
              // [loca[3], `4${fulllocaArr[3] ? fulllocaArr[3] : ""}`],
              // [loca[4], fulllocaArr[4]],
            }
            onChange={(e) => {
              setLocaValue(e.target.value);
            }}
          ></Dropdown>
          <div>현재 설정된 배송지 : {locaValue}</div>
        </div>
        <div className="">
          <AddAddress
            locaValue={locaValue}
            setLocaValue={setLocaValue}
          ></AddAddress>
        </div>
      </div>
      <div className="flex p-1">
        <div className="pl-1">
          <input type="checkbox" />
        </div>
        <div className="pl-3">안심번호 사용</div>
      </div>
    </div>
  );
};

export default DeliveryAdrress;
