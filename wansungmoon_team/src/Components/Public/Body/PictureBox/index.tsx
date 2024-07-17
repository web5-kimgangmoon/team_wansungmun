import Comp from "./comp";
import { ChangeEvent } from "react";

interface IProps {
  idStr: string;
  data: FormData | undefined; //hook 써주세요
  onChangeImg: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PictureBox = ({ idStr, data, onChangeImg }: IProps): JSX.Element => {
  let pictureArr: string[] = [];
  if (data) {
    for (let item of data.getAll("imgs")) {
      // console.log(item);
      // let reader = new FileReader();
      // reader.onload = (e) => {
      //   pictureArr.push(e.target?.result as ArrayBuffer);
      // };
      // reader.readAsDataURL(item as Blob);
      // 크기가 너무 커서 react에서 변수를 저장해서 이전값과 확인하는 과정을 거치지 않는다.
      pictureArr.push(URL.createObjectURL(item as Blob));
      // 그냥 주소 위치로 저장, nginx 환경에서도 돌아가는지 확인이 필요
    }
  }
  return <Comp idStr={`${idStr}`} onChange={onChangeImg} data={pictureArr} />;
};

// document.getElementById("insertChannel_icon").onchange = (e) => {
//     const formData = new FormData();
//     let data;
//     [...e.target.files].forEach((item) => {
//       formData.append("icon", item);
//     });
//     (async () =>
//       (data = await axios({
//         method: "post",
//         url: "http://localhost:3080/upload",
//         Headers: {
//           "Content-type": "multipart/form-data",
//         },
//         data: formData,
//         withCredentials: true,
//       })))();
//     console.log(data);
//     const src = JSON.parse(data);
//     console.log(src);
//   };

export default PictureBox;
