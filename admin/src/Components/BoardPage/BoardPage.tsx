import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Search from "./Search";
import BoardLayout from "./BoardLayout";
import DelBtn from "./DelBtn";

function BoardPage() {
  return (
    <>
      <Search></Search>
      <BoardLayout></BoardLayout>
      <BoardLayout></BoardLayout>
      <DelBtn></DelBtn>
    </>
  );
}

export default BoardPage;
