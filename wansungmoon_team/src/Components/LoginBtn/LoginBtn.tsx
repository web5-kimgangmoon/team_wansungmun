import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginArea = () => {
  const [logined, setLogined] = useState(false);
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

  useEffect(() => {
    const loginCheck = async () => {
      try {
        console.log("아무 일도 없었다");
        const isLogin = await axios.get("api/logCheck", {
          withCredentials: true,
        });
        if (isLogin.data) {
          console.log(isLogin.data);
          console.log("로그인 성공");
          setLogined(true);
        } else {
          console.log("로그인 안됌");
          setLogined(false);
        }
      } catch (err) {
        console.error(err);
      }
    };
    loginCheck();
  }, []);

  return (
    <div>
      {!logined && <LoginBtn></LoginBtn>}
      {logined && <LogoutBtn></LogoutBtn>}
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
