import { useState } from "react";
import InputTextBox from "../../Public/Body/InputBox";

const Regist = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [location, setLocation] = useState("");
  const [detailloca, setDetailloca] = useState("");

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(email + "+" + password + "+" + phoneNum + "+" + nickname);
  };
  return (
    <div className="container">
      <form className="container flex flex-col gap-[1rem] items-center">
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
        <InputTextBox
          title=""
          placeholder="상세주소"
          value={detailloca}
          onInput={(e) => setDetailloca(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Regist;
