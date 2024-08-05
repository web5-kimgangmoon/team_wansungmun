import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { isToken } from "typescript";

const KakaoCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    // const params = new URL(document.location.toString()).searchParams;
    // const code = params.get("code");
    const grant_type = "authorization_code";
    const client_id = `${process.env.REACT_APP_KAKAO_API}`;
    const REDIRECT_URI = "http://localhost:3000/login/kakao";
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        const accesstoken = res.data.access_token;
        console.log("액세스 토큰: " + accesstoken);
        axios
          .get(`https://kapi.kakao.com/v2/user/me`, {
            headers: {
              Authorization: `Bearer ${accesstoken}`,
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          })
          .then((res2) => {
            console.log(res2);
            console.log("res2: " + res2.data.kakao_account.email);
            axios
              .post(
                "/api/kakaoLogin",
                { email: res2.data.kakao_account.email },
                { withCredentials: true }
              )
              .then((res3) => {
                console.log(res3);
                if (res3.status == 203) {
                  console.log(res3.status);
                  navigate("/");
                } else if (res3.status == 202) {
                  navigate("/regist/kakao", {
                    state: { email: res3.data },
                  });
                }
              });
          });
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default KakaoCallback;
