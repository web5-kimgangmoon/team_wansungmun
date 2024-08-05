import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const logoutBtn = async () => {
      try {
        const sessionKill = await axios.get("/api/logout", {
          withCredentials: true,
        });
        if (sessionKill.status == 201) {
          navigate("/");
        } else {
          alert("로그아웃 명령이 정상적으로 실행되지 않았습니다");
        }
      } catch (err) {
        console.error(err);
      }
    };
    logoutBtn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
};
