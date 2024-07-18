import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "ffc8b4a023164e322ab4909015e6231f", //본인 앱 키를 넣어주자.
    libraries: ["clusterer", "drawing", "services"],
  });
}
