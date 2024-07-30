import SingleTextBox from "../../Public/Header/singleTextBox";
import LocationChase from "../../Public/Body/KakaoMapLocationGetter/LocationChase";
import Button from "../../Public/Body/Button";
import LongButton from "../../Public/Body/LongButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAddress from "../../Public/Body/KakaoMapLocationGetter/hooks/LocationChase/useAddress";

export interface IProps {
  start: { lat: number; lng: number; addr: string };
  destination: { lat: number; lng: number; addr: string };
  route: { lat: number; lng: number };
  current: { lat: number; lng: number };
  createdAt: Date;
}

const LocationCheck = ({
  start,
  destination,
  current,
  route,
  createdAt,
}: IProps) => {
  const getRoute = useAddress(route.lat, route.lng);
  const getCurrent = useAddress(current.lat, current.lng);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <LocationChase
          start={start}
          route={getRoute?.addr}
          current={getCurrent.addr}
          destination={destination}
          getRoute={getRoute?.setAddress}
          getCurrent={getCurrent.setAddress}
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
                createdAt.getMonth() + 1
              }월 ${createdAt.getDate()}일 ${createdAt
                .getHours()
                .toString()
                .padStart(2, "0")}:${createdAt
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
                {getRoute ? getRoute.addr.addr : "경유지 미존재"}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Button bgColor="white" textColor="black" isBorder={true}>
                  현재위치
                </Button>
              </div>
              <div className="flex text-sm items-center justify-center">
                {getCurrent.addr.addr}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Button bgColor="blue" textColor="black">
                  출발지
                </Button>
              </div>
              <div className="flex text-sm items-center justify-center">
                {start.addr}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Button bgColor="red" textColor="black">
                  도착지
                </Button>
              </div>
              <div className="flex text-sm items-center justify-center">
                {destination.addr}
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
    </div>
  );
};

export default LocationCheck;
