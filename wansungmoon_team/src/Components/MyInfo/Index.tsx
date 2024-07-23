import Header from "../Header";
import InfoTab from "./InfoTab";
import MyInfo from "./MyInfo";

interface IProps {}

const InfoPage = () => {
  return (
    <div>
      <Header></Header>
      <MyInfo></MyInfo>
      <InfoTab></InfoTab>
    </div>
  );
};

export default InfoPage;
