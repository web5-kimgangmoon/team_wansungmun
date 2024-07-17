import Comp from "./comp";
import { ChangeEvent } from "react";

interface IProps {
  idStr: string;
  data: FormData | undefined; //hook 써주세요
  onChangeImg: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PictureBox = ({ idStr, data, onChangeImg }: IProps): JSX.Element => {
  let pictureArr: ArrayBuffer[] = [];
  if (data) {
    for (let item of data.getAll("imgs")) {
      let reader = new FileReader();
      reader.onload = (e) => {
        pictureArr.push(e.target?.result as ArrayBuffer);
      };
      reader.readAsDataURL(item as Blob);
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
