import axios from "axios";
import React, { useState } from "react";
import InputTextBox from "../../Public/Body/InputBox";
import Button from "../../Public/Body/Button";
import { useNavigate } from "react-router-dom";
export interface LoginForm {
  email: string;
  password: string;
}

const Email_login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailReg = /^[a-z0-9가-힣]+@[a-z]+\.[a-z]{2,3}$/;
  console.log(emailReg.test(email));
  const pwreg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  console.log(pwreg.test(password));

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.preventDefault();
      if (!emailReg.test(email)) {
        alert("이메일 형식을 맞춰서 입력해주세요");
      } else if (!pwreg.test(password)) {
        alert("패스워드 형식을 맞춰서 입력해주세요");
      } else if (email.length == 0) {
        alert("이메일을 입력해주세요");
      } else if (password.length == 0) {
        alert("패스워드를 입력해주세요 ");
      } else {
        const data = await axios.post(
          "/api/login",
          {
            email: email,
            password: password,
          },
          {
            withCredentials: true,
          }
        );
        if (data.status == 201) {
          console.log(data);
          // const location = useLocation();

          navigate("/");
        } else if (data.status == 301) {
          alert("유저를 찾을 수 없습니다");
        }
        // axios.get("api/logCheck", { withCredentials: true });
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form
        className="container flex flex-col gap-[1rem] items-center"
        // onSubmit={onSubmit}
      >
        <InputTextBox
          title="이메일 주소"
          placeholder="이메일 주소 입력"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
        <InputTextBox
          title="비밀번호"
          placeholder="영문, 숫자 포함 최소 8자리 이상"
          type="password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
        <Button
          textColor="black"
          bgColor="gray"
          onClick={(e) => {
            onSubmit(e);
          }}
        >
          로그인
        </Button>
      </form>
    </div>
  );
};

export default Email_login;
// export default {};
