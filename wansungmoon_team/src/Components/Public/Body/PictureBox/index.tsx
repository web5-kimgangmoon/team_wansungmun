import { useMutation } from "@tanstack/react-query";
import Comp from "./comp";
import axios from "axios";
import { ChangeEvent } from "react";

interface IProps {
  idStr: string;
}

const PictureBox = ({ idStr }: IProps): JSX.Element => {
  const { data, mutate } = useMutation({
    mutationKey: ["img", "upload"],
    mutationFn: async (formData: FormData) => {
      try {
        const data = await axios({
          method: "post",
          url: "http://localhost:3080/upload",
          headers: {
            "Content-type": "multipart/form-data",
          },
          data: formData,
        });
        return data;
      } catch (err) {
        console.error(err);
        return undefined;
      }
    },
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (e.target && e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        console.log(e.target.files.item(i));
        formData.append(`imgs`, e.target.files.item(i) as File);
      }
      console.log(formData.getAll("imgs"));
      mutate(formData);
    }
  };
  return <Comp id={`${idStr}Uploader`} onChange={onChange} data={data} />;
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
