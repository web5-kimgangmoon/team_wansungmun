import { Map, MapMarker } from "react-kakao-maps-sdk";
import startMarker from "./../../../../../imgs/blue_b.png";
import destinationMarker from "./../../../../../imgs/red_b.png";
import routeMarker from "./../../../../../imgs/route2.png";

interface IProps {
  destination: { lat: number; lng: number } | undefined;
  start: { lat: number; lng: number } | undefined;
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
  const startM = start ? (
    <MapMarker
      position={start}
      image={{
        src: startMarker,
        size: { width: 37, height: 42 },
      }}
      zIndex={1}
    />
  ) : (
    ""
  );
  const destinationM = destination ? (
    <MapMarker
      position={destination}
      image={{
        src: destinationMarker,
        size: { width: 37, height: 42 },
      }}
      zIndex={1}
    />
  ) : (
    ""
  );
  const routeM = route ? (
    <MapMarker
      position={route}
      image={{
        src: routeMarker,
        size: { width: 30, height: 32 },
      }}
    />
  ) : (
    ""
  );
  const currentM = current ? (
    <MapMarker
      position={current}
      image={{
        src: routeMarker,
        size: { width: 30, height: 32 },
      }}
    />
  ) : (
    ""
  );

  return (
    <div className="w-full">
      <div className="w-full">
        <Map
          onCreate={moveCenter}
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: "100%", height: "15rem" }}
        >
          {startM}
          {destinationM}
          {routeM}
          {currentM}
        </Map>
      </div>
    </div>
  );
};

export default LocationChase;
