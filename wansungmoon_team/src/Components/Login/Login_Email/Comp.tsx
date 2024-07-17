import { FC, useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <input type="text" placeholder="Email" value={email}></input>
      <input type="password" placeholder="Password" value={password}></input>
      <button className="border">로그인</button>
    </form>
  );
};

export default Email;
