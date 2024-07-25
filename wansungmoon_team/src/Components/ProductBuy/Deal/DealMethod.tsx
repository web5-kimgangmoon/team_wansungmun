import Dropdown from "../../Public/Body/Dropdown";

interface IProps {}

const DealMethod = () => {
  return (
    <div className="m-2">
      <div className="font-black pb-2">거래 방법</div>
      <Dropdown
        name="DealMethod"
        defaultStr="거래방법"
        options={[
          ["1", "일반 택배(선불)"],
          ["2", "일반 택배(후불)"],
          ["3", "퀵 거래(선불)"],
          ["4", "퀵 거래(후불)"],
          ["5", "방문 거래"],
        ]}
      ></Dropdown>
    </div>
  );
};

export default DealMethod;
