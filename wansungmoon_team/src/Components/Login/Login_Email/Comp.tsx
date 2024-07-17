// import axios from "axios";
// import React, { FC, useState } from "react";

// export interface LoginForm {
//   email: string;
//   password: string;
// }

// const Email_login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(email + password);
//     await axios
//       .post(
//         "http://localhost:3080/api/login",
//         {
//           email: email,
//           password: password,
//         },
//         {
//           withCredentials: true,
//         }
//       )
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         ></input>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         ></input>
//         <button className="border">로그인</button>
//       </form>
//     </div>
//   );
// };

// export default Email_login;
export default {};
