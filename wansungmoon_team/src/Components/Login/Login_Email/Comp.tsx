import axios from "axios";
import React, { FC, useState } from "react";
import InputTextBox from "../../Public/Body/InputBox";
import Button from "../../Public/Body/Button";
import MenuBar from "../../Public/Footer/MenuBar";
import { useLocation } from "react-router-dom";
export interface LoginForm {
  email: string;
  password: string;
}

const Email_login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.preventDefault();
      console.log(email + password);
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
        console.log(data.status);

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
