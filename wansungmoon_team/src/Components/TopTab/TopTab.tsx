import Dropdown from "../Public/Body/Dropdown";

interface IProps {}

const TopTab = () => {
  return (
    <div>
      <div className="w-5/6 m-auto">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button className="text-xl font-bold">←</button>
            <div className="text-xl font-bold">스포츠/레저</div>
          </div>
          <div>
            <button className="text-xl font-bold">홈</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTab;
