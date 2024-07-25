import { useRef, useState } from "react";
import InputTextBox from "../../Public/Body/InputBox";
import Button from "../../Public/Body/Button";
// import { ModalComp } from "./loca_modal/Comp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Regist_email = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [location, setLocation] = useState("");
  const [detailloca, setDetailloca] = useState("");
  const navigate = useNavigate();
  const emailReg = /^[a-z0-9가-힣]+@[a-z]+\.[a-z]{2,3}$/;
  const pwreg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  const phonereg = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
  console.log(phonereg.test(phoneNum));

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.preventDefault();
      console.log(email + "+" + password + "+" + phoneNum + "+" + nickname);
      if (!emailReg) {
        alert("이메일 형식을 지켜주세요");
      } else if (!pwreg.test(password)) {
        alert("패스워드는 8자 이상, 영문과 숫자를 조합해 입력해주세요");
      } else if (30 < nickname.length || nickname.length < 4) {
        alert("닉네임은 최소 4자 이상, 최대 30자 미만으로 입력해주세요");
      } else if (!phonereg.test(phoneNum)) {
        alert("입력하신 휴대폰 번호를 확인해주세요");
      } else {
        const data = await axios.post(
          "/api/regist",
          {
            email: email,
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
          alert("이미 가입된 이메일입니다");
        } else if (data.status == 302) {
          alert("중복된 휴대폰 번호입니다");
        } else if (data.status == 303) {
          alert("중복된 닉네임입니다");
        } else if (data.status == 201) {
          navigate("/");
        }
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
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
        <InputTextBox
          title="비밀번호"
          placeholder="영문, 숫자 포함 최소 8자리 이상"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
          type="password"
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
          type="number"
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

export default Regist_email;
