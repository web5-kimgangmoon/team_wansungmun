import Dropdown from "../Public/Body/Dropdown";
import MainBox from "./MainBox";

interface IProps {}

const Main = () => {
  return (
    <div className="container">
      <Dropdown
        name="address"
        defaultStr="주소설정"
        options={[["강동구 천호동", "강동구 천호동"]]}
      />
      <div className="mt-2 mb-2">
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          className="border w-full"
        />
      </div>
      <MainBox />
    </div>
  );
};

export default Main;
