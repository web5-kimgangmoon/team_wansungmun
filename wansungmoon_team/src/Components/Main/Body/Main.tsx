import Dropdown from "../../Public/Body/Dropdown";
import MainList from "./MainList";

export type CateArrTy = Array<{
  category: string;
  id: number;
  cateImg: string;
}>;

interface IProps {
  cateArr: CateArrTy | undefined;
}

const Main = ({ cateArr }: IProps) => {
  return (
    <div className="container">
      <Dropdown name="address" defaultStr="주소설정" options={[["강동구 천호동", "강동구 천호동"]]} />
      <div className="mt-2 mb-2">
        <input type="text" placeholder="검색어를 입력해주세요." className="border w-full" />
      </div>
      {/* <MultipleRows /> */}
      <MainList cateArr={cateArr ? cateArr : [{ category: "", cateImg: "", id: 1 }]} />
    </div>
  );
};

export default Main;
