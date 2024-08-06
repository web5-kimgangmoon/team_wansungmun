import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  console.log(process.env.REACT_APP_KAKAOKEY);
  useKakaoLoaderOrigin({
    appkey: process.env.REACT_APP_KAKAOKEY as string, //본인 앱 키를 넣어주자.
    libraries: ["clusterer", "drawing", "services"],
  });
}
