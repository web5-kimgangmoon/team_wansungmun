import Header from "../Header";
import InfoTab from "./Info/InfoTab";
import MyInfo from "./Info/MyInfo";

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
