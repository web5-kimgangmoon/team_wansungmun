import { Map, MapMarker } from "react-kakao-maps-sdk";
import { MouseEvent, TouchEvent } from "react";
import Button from "../Button";
import ClickButton from "../ClickButton";

interface IProps {
  mapLocation: { lat: number; lng: number };
  isEnableMarking: boolean;
  changeIsEnableMarking: (e: MouseEvent<HTMLButtonElement>) => void;
  clickMarking: (
    target: kakao.maps.Map,
    e: kakao.maps.event.MouseEvent
  ) => void;
  mapRef: React.RefObject<kakao.maps.Map>;
}

const KakaoMapLocationGetter = ({
  mapLocation,
  isEnableMarking,
  changeIsEnableMarking,
  clickMarking,
  mapRef,
}: IProps) => {
  // const padBy = (x: number, y: number) => {
  //   const map = mapRef.current;
  //   if (!map) return;
  //   mapRef.current?.panBy(x, y);
  // };
  // const setZoom = (isGrow: boolean) => {
  //   const map = mapRef.current;
  //   if (!map) return;
  //   let level = mapRef.current?.getLevel();
  //   isGrow ? level++ : level--;
  //   mapRef.current?.setLevel(level);
  // };
  return (
    <div className="w-full">
      <div className="pb-1">
        <ClickButton
          textColor="white"
          bgColor={isEnableMarking ? "red" : "blue"}
          onClick={changeIsEnableMarking}
        >
          {isEnableMarking ? "마커 삽입중" : "마커 삽입전환"}
        </ClickButton>
      </div>
      <div className="w-full">
        <Map
          center={mapLocation}
          style={{ width: "100%", height: "15rem" }}
          level={3}
          onClick={clickMarking}
          // onTouchStart={(e: TouchEvent<HTMLDivElement>) => {
          //   // if (e.targetTouches.length === 1) {
          //   let originX = e.targetTouches[0].clientX;
          //   let originY = e.targetTouches[0].clientY;

          //   e.currentTarget.ontouchmove = (e) => {
          //     console.log(e.currentTarget);
          //     let moveX = originX - e.targetTouches[0].clientX;
          //     let moveY = originY - e.targetTouches[0].clientY;
          //     if (moveX > 0) {
          //       moveX = moveX > 220 ? 220 : moveX;
          //       // moveX = 100;
          //     } else {
          //       moveX = moveX < -220 ? -220 : moveX;
          //       // moveX = -100;
          //     }
          //     if (moveY > 0) {
          //       // moveY = 100;
          //       moveY = moveY > 220 ? 220 : moveY;
          //     } else {
          //       // moveY = -100;
          //       moveY = moveY < -220 ? -220 : moveY;
          //     }

          //     padBy(moveX, moveY);
          //   };
          //   // } else if (e.targetTouches.length > 1) {
          //   //   let [originXLeft, originXRight] =
          //   //     e.targetTouches[0].clientX > e.targetTouches[1].clientX
          //   //       ? [e.targetTouches[1].clientX, e.targetTouches[0].clientX]
          //   //       : [e.targetTouches[0].clientX, e.targetTouches[1].clientX];
          //   //   e.currentTarget.ontouchmove = (e) => {
          //   //     let moveXLeft = originXLeft - e.targetTouches[0].clientX;
          //   //     let moveXRight = originXRight - e.targetTouches[0].clientY;
          //   //     if (moveXLeft < 0 && moveXRight > 0) setZoom(true);
          //   //     if (moveXLeft < 0 && moveXRight > 0) setZoom(false);
          //   //   };
          //   // }
          // }}
          ref={mapRef}
        >
          <MapMarker position={mapLocation ?? mapLocation} />
        </Map>
      </div>
    </div>
  );
};

export default KakaoMapLocationGetter;
