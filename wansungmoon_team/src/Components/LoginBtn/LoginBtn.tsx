import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/logcheck";

const LoginArea = () => {
  // const [logined, setLogined] = useState(false);
  const LoginBtn = () => {
    return (
      <Link to="/login">
        <div className="mt-3">
          <button className="font-bold text-sm ">로그인</button>
        </div>
      </Link>
    );
  };
  const LogoutBtn = () => {
    return (
      <Link to="/logout">
        <div className="mt-3">
          <button className="font-bold text-sm ">로그아웃</button>
        </div>
      </Link>
    );
  };
  // const loginCheck = useCallback(async () => {
  //   console.log("아무것도 일어나지 않았다!");
  //   try {
  //     const isLogin = await axios.get("api/logCheck", {
  //       withCredentials: true,
  //     });
  //     if (isLogin.data) {
  //       console.log("로그인 성공");
  //       setLogined(true);
  //     } else {
  //       console.log("로그인 안됌");
  //       setLogined(false);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);
  const [userData, setUserState] = useRecoilState(userState);
  useEffect(() => {
    const loginCheck = async () => {
      try {
        const isLogin = await axios.get("api/logCheck", {
          withCredentials: true,
        });
        console.log(isLogin.data);
        if (isLogin.status == 201) {
          console.log("로그인 성공");
          setUserState({ autority: isLogin.data.autority });
        } else {
          console.log("로그인 안됌");
          setUserState(undefined);
        }
      } catch (err) {
        console.error(err);
      }
    };
    loginCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {!userData && <LoginBtn></LoginBtn>}
      {userData && <LogoutBtn></LogoutBtn>}
    </div>
  );
};

// const LoginBtn = () => {
//   const [login, setLogin] = useState(false);
//   const loginCheck = async () => {
//     try {
//       const isLogin = await axios.get("api/logCheck", {
//         withCredentials: true,
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };

export default LoginArea;
