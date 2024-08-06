import MenuBar from "../Public/Footer/MenuBar";
import Header from "../Header";
import SingleTextBox from "../Public/Header/singleTextBox";
import LocationChase from "../Public/Body/KakaoMapLocationGetter/LocationChase/index2";
// import getAddress from "../Public/Body/KakaoMapLocationGetter/hooks/LocationChase/useAddress";
import Button from "../Public/Body/Button";
import LongButton from "../Public/Body/LongButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LocationCheck = () => {
  // const getStart = getAddress( );
  // const getDestination = getAddress();
  const getRoute = useState<{ lat: number; lng: number; addr: string }>({
    lat: 35.56496830314491,
    lng: 126.93990862062978,
    addr: "주소를 찾지 못했습니다",
  });
  const getCurrent = useState<{ lat: number; lng: number; addr: string }>({
    lat: 35.56496830314391,
    lng: 126.93990862062678,
    addr: "주소를 찾지 못했습니다",
  });
  const getStart = useState<{
    lat: number | undefined;
    lng: number | undefined;
    addr: string;
  }>({
    lat: undefined,
    lng: undefined,
    addr: "서울 강동구 암사동",
  });
  const getDestination = useState<{
    lat: number | undefined;
    lng: number | undefined;
    addr: string;
  }>({
    lat: undefined,
    lng: undefined,
    addr: "서울 강동구 천호동",
  });
  const navigate = useNavigate();
  const [data, setData] = useState<string>("");
  const date = new Date();
  return (
    <div>
      <div>
        <Header />
        <SingleTextBox>배송품위치확인</SingleTextBox>
      </div>
      <div>
        <LocationChase
          // start={{ lat: 35.56496830314491, lng: 126.93990862062978 }}
          start={getStart[0]}
          route={getRoute[0]}
          current={getCurrent[0]}
          destination={getDestination[0]}
          setStart={getStart[1]}
          setDestination={getDestination[1]}
          setRoute={getRoute[1]}
          setCurrent={getCurrent[1]}
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
                {getRoute[0]?.addr}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Button bgColor="white" textColor="black" isBorder={true}>
                  현재위치
                </Button>
              </div>
              <div className="flex text-sm items-center justify-center">
                {getCurrent[0]?.addr}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Button bgColor="blue" textColor="black">
                  출발지
                </Button>
              </div>
              <div className="flex text-sm items-center justify-center">
                서울 강동구 암사동
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Button bgColor="red" textColor="black">
                  도착지
                </Button>
              </div>
              <div className="flex text-sm items-center justify-center">
                서울 강동구 천호동
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <LongButton
            bgColor="white"
            textColor="black"
            isBorder={true}
            onClick={() => navigate(-1)}
          >
            이전으로
          </LongButton>
        </div>
      </div>
      <MenuBar />
    </div>
  );
};

export default LocationCheck;
