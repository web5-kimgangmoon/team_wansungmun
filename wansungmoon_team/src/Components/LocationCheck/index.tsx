import { Link } from "react-router-dom";
import LongButton from "../Public/Body/LongButton";
import MenuBar from "../Public/Footer/MenuBar";
import Header from "../Header";
import SingleTextBox from "../Public/Header/singleTextBox";
import LocationChase from "../Public/Body/KakaoMapLocationGetter/LocationChase/comp";

const LocationCheck = () => {
  return (
    <div>
      <div>
        <Header />
        <SingleTextBox>배송품위치확인</SingleTextBox>
      </div>
      <div>
        <LocationChase
          start={{ lat: 34.5563, lng: 126.79581 }}
          destination={{ lat: 33.5563, lng: 126.79581 }}
        />
      </div>
      <MenuBar />
    </div>
  );
};

export default LocationCheck;
