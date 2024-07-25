import Dropdown from "../../Public/Body/Dropdown";
import LongButton from "../../Public/Body/LongButton";
import AddAddress from "../Modal/AddAddress";

interface IProps {}

const DeliveryAdrress = () => {
  return (
    <div>
      <div className="px-2 font-black">배송지</div>
      <div className="gap-3 p-2">
        <div className="mb-2">
          <Dropdown
            name="myAddress"
            defaultStr="주소설정"
            options={[
              ["1", "서울시 강남구 청담동 건물갖고싶다"],
              ["2", "서울시 강동구 천호동 100-100"],
              ["3", "충남 논산시 부창동 100-100"],
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
