import { useRef, useState } from "react";
import InputTextBox from "../../Public/Body/InputBox";
import Button from "../../Public/Body/Button";
// import { ModalComp } from "../Regist_Email/loca_modal/Comp";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const Kakao_regist = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [location, setLocation] = useState("");
  const [detailloca, setDetailloca] = useState("");
  const userlocation = useLocation();
  const userInfo = { ...userlocation.state };
  const navigate = useNavigate();
  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.preventDefault();
      console.log(email + "+" + password + "+" + phoneNum + "+" + nickname);
      const data = await axios.post(
        "/api/regist",
        {
          email: userInfo.email,
          password: password,
          nickname: nickname,
          phoneNum: phoneNum,
          location: "서울시 어디구 무지개너머로",
          detailloca: detailloca,
        },
        { withCredentials: true }
      );
      console.log(data.status);
      if (data.status == 301) {
        alert("이메일 중복");
      } else if (data.status == 302) {
        alert("휴대폰중복");
      } else if (data.status == 303) {
        alert("어쩌구저쩌꾸");
      } else if (data.status == 201) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container">
      <form className="container flex flex-col gap-[0.5rem] items-center">
        <InputTextBox
          title="이메일 주소"
          placeholder="이메일 주소 입력"
          value={userInfo.email}
          onInput={(e) => (e.target.value = userInfo.email)}
        />
        <InputTextBox
          title="비밀번호"
          placeholder="영문, 숫자 포함 최소 8자리 이상"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
        <InputTextBox
          title="닉네임"
          placeholder="닉네임"
          value={nickname}
          onInput={(e) => setNickname(e.target.value)}
        />
        <InputTextBox
          title="휴대폰 번호"
          placeholder="휴대폰 번호"
          value={phoneNum}
          onInput={(e) => setPhoneNum(e.target.value)}
        />
        {/* <ModalComp /> */}

        <InputTextBox
          title="상세주소"
          placeholder="상세주소"
          value={detailloca}
          onInput={(e) => setDetailloca(e.target.value)}
        />
        <Button
          textColor="black"
          bgColor="gray"
          onClick={(e) => {
            onSubmit(e);
          }}
        >
          회원 가입
        </Button>
      </form>
    </div>
  );
};

export default Kakao_regist;
