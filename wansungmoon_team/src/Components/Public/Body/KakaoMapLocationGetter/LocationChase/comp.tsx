import { Map, MapMarker } from "react-kakao-maps-sdk";
import startMarker from "./../../../../../imgs/blue_b.png";
import destinationMarker from "./../../../../../imgs/red_b.png";
import routeMarker from "./../../../../../imgs/route2.png";

interface IProps {
  destination: { lat: number; lng: number };
  start: { lat: number; lng: number };
  route?: { lat: number; lng: number };
  current?: { lat: number; lng: number };
  moveCenter: (e: kakao.maps.Map) => void;
}

const LocationChase = ({
  destination,
  start,
  route,
  current,
  moveCenter,
}: IProps) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <Map
          onCreate={moveCenter}
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: "100%", height: "15rem" }}
        >
          <MapMarker
            position={start}
            image={{
              src: startMarker,
              size: { width: 37, height: 42 },
            }}
            zIndex={1}
          />
          <MapMarker
            position={destination}
            image={{
              src: destinationMarker,
              size: { width: 37, height: 42 },
            }}
            zIndex={1}
          />
          {route ? (
            <MapMarker
              position={route}
              image={{
                src: routeMarker,
                size: { width: 30, height: 32 },
              }}
            />
          ) : (
            ""
          )}
          {current ? (
            <MapMarker
              position={current}
              image={{
                src: routeMarker,
                size: { width: 30, height: 32 },
              }}
            />
          ) : (
            ""
          )}
        </Map>
      </div>
    </div>
  );
};

export default LocationChase;
