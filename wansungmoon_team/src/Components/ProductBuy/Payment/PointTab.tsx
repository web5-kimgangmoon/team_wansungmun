import PointCharge from "../Modal/PointCharge";

interface IProps {
  point: number;
}

const PointTab = ({ point }: IProps) => {
  return (
    <div className="p-1">
      <div className="px-2 py-1 font-bold">Moon Point</div>
      <div className="flex">
        <input type="text" className="bg-cusGray w-[75%] rounded-2xl" />
        <div className="pl-2">
          <PointCharge></PointCharge>
        </div>
      </div>
      <div className="flex p-1">
        <div className="w-[75%]">
          <div className="flex text-sm w-full gap-2 py-2">
            <div className="font-cusgray">사용가능한 MoonPoint</div>
            <div className="font-semibold">{point} 원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointTab;
