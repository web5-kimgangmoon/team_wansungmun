import Dropdown from "../../Public/Body/Dropdown";
import AddAddress from "../Modal/AddAddress";

interface IProps {
  location: Array<{ id: number; location: string; locationDetail: string }>;
  locaValue: string;
  setLocaValue: (str: string) => void;
  setDetailLoca: (str: string) => void;
  detailLoca: string;
  setLocaOther: (str: any) => void;
  showLoca: any;
  setShowLoca: (str: any) => void;
}

const DeliveryAdrress = ({
  location,
  locaValue,
  setLocaValue,
  setDetailLoca,
  detailLoca,
  setLocaOther,
  setShowLoca,
  showLoca,
}: IProps) => {
  let fulllocaArr: Array<[string | number, string]> = [];
  for (let i = 0; i < location.length; i++) {
    if (!location[i].location) continue;
    fulllocaArr.push([i, location[i].location + location[i].locationDetail]);
    // loca:
  }
  // setDetailLoca UserList[value].detailLoca
  // fulllocaArr.push(["custom","선택주소"]);

  // const currenLocation = location.find(
  //   (item) => item.id.toString() === locaValue
  // );
  // const currenLocation = locaValue
  //   ? `${location[+locaValue].location} ${location[+locaValue].locationDetail}`
  //   : "";

  return (
    <div>
      <div className="px-2 font-black">배송지</div>
      <div className="gap-3 p-2">
        <div className="mb-2">
          <Dropdown
            name="myAddress"
            defaultStr="주소설정"
            options={fulllocaArr}
            onChange={(e) => {
              setLocaValue(e.target.value);
            }}
          ></Dropdown>
          <div>현재 설정된 배송지 :{/* {currenLocation} */}</div>
        </div>
        <div className="">
          <AddAddress
            locaValue={locaValue}
            setLocaValue={setLocaValue}
            setDetailLoca={setDetailLoca}
            detailLoca={detailLoca}
            setLocaOther={setLocaOther}
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
