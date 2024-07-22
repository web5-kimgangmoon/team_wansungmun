import InfoTab from "./InfoTab";
import MyInfo from "./MyInfo";

interface IProps {}

const InfoPage = () => {
  return (
    <div>
      <MyInfo></MyInfo>

      <InfoTab></InfoTab>
    </div>
  );
};

export default InfoPage;
