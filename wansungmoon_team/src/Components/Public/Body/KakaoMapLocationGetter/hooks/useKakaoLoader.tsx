import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: , //본인 앱 키를 넣어주자.
    libraries: ["clusterer", "drawing", "services"],
  });
}
