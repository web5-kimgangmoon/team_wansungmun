import { AnyARecord } from "dns";
import Dropdown from "../../Public/Body/Dropdown";
import LongButton from "../../Public/Body/LongButton";
import AddAddress from "../Modal/AddAddress";

interface IProps {
  location: Array<any>;
}

const DeliveryAdrress = ({ location }: IProps) => {
  let locaArr: any = [];
  for (let i = 0; i < location.length; i++) {
    locaArr.push(location[i].location + location[i].locationDetail);
  }

  console.log(locaArr);
  return (
    <div>
      <div className="px-2 font-black">배송지</div>
      <div className="gap-3 p-2">
        <div className="mb-2">
          <Dropdown
            name="myAddress"
            defaultStr="주소설정"
            options={[
              ["1", locaArr[0]],
              ["2", locaArr[1]],
              ["3", locaArr[2]],
              ["4", locaArr[3]],
              ["5", locaArr[4]],
            ]}
          ></Dropdown>
        </div>
        <div className="">
          <AddAddress></AddAddress>
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
