import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BoardPage from "./BoardPage/BoardPage";
import ReportPage from "./ReportPage/ReportPage";
import UserManage from "./UserManage/UserManage";

function TabMenu() {
  return (
    <Tabs defaultActiveKey="Board" id="fill-tab-example" className="mb-3" fill>
      <Tab eventKey="Board" title="유저게시글 관리">
        <BoardPage></BoardPage>
      </Tab>
      <Tab eventKey="profile" title="신고 게시글 관리">
        <ReportPage></ReportPage>
      </Tab>
      <Tab eventKey="longer-tab" title="유저관리">
        <UserManage></UserManage>
      </Tab>
    </Tabs>
  );
}

export default TabMenu;
