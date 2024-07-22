import MenuBar from "../Public/Footer/MenuBar";
import Header from "../Header";
import SingleTextBox from "../Public/Header/singleTextBox";
import LocationChase from "../Public/Body/KakaoMapLocationGetter/LocationChase";
import getAddress from "../Public/Body/KakaoMapLocationGetter/hooks/LocationChase/useAddress";
import Button from "../Public/Body/Button";
import LongButton from "../Public/Body/LongButton";

const LocationCheck = () => {
  const getStart = getAddress();
  const getDestination = getAddress();
  const getRoute = getAddress();
  const date = new Date();
  return (
    <div>
      <div>
        <Header />
        <SingleTextBox>배송품위치확인</SingleTextBox>
      </div>
      <div>
        <LocationChase
          start={{ lat: 35.56496830314491, lng: 126.93990862062978 }}
          route={{ lat: 37.5443765, lng: 127.1276202 }}
          destination={{ lat: 37.5591140475276, lng: 127.13168588897 }}
          getStart={{ setAddress: getStart.setAddress }}
          getDestination={{ setAddress: getDestination.setAddress }}
          getRoute={{ setAddress: getRoute.setAddress }}
        />
        <div className="py-2 px-1">
          <div className="px-2 py-1 border border-cusGray rounded-md flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Button bgColor="orange" textColor="black">
                  배송시작시간
                </Button>
              </div>
              <div className="flex text-sm items-center justify-center">{`${
                date.getMonth() + 1
              }월 ${date.getDate()}일 ${date
                .getHours()
                .toString()
                .padStart(2, "0")}:${date
                .getMinutes()
                .toString()
                .padStart(2, "0")}`}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Button bgColor="white" textColor="black" isBorder={true}>
                  이전경유지주소
                </Button>
              </div>
              <div className="flex text-sm items-center justify-center">
                {getRoute.addr}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Button bgColor="blue" textColor="black">
                  출발지
                </Button>
              </div>
              <div className="flex text-sm items-center justify-center">
                {getStart.addr}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Button bgColor="red" textColor="black">
                  도착지
                </Button>
              </div>
              <div className="flex text-sm items-center justify-center">
                {getDestination.addr}
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <LongButton bgColor="white" textColor="black" isBorder={true}>
            이전으로
          </LongButton>
        </div>
      </div>
      <MenuBar />
    </div>
  );
};

export default LocationCheck;
