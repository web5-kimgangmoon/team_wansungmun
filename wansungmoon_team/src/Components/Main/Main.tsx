import axios from "axios";
import Dropdown from "../Public/Body/Dropdown";
import MainBox from "./MainBox";
import MainList from "./MainList";
import MultipleRows from "./Slide";
import { useEffect } from "react";

interface IProps {}
const Main = () => {
  let temp;
  const cate_list = async () => {
    try {
      console.log("카테고리 데이터");
      // const titleArr = [];
      const listData = await axios.get(
        "/api/category",
        {
          withCredentials: true,
        }
        // titleArr.forEach()
      );
      console.log(listData.data);
      temp = listData.data;
      return temp;
    } catch (err) {
      console.error(err);
    }
  };
  cate_list();
  console.log(temp);
  // useMutation, useQuery
  const titleArr = ["1234"];

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
      {/* <MultipleRows /> */}
      <MainList titleArr={titleArr} />
    </div>
  );
};

export default Main;
