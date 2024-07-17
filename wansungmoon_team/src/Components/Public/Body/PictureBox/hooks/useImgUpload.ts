import axios from "axios";
import { ChangeEvent, useState } from "react";

const useImgUpload = () => {
  const [uploadedImg, setUploadedImgState] = useState<FormData[] | undefined>(
    undefined
  );

  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (e.target && e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        // formData.set(`imgs`, e.target.files.item(i) as File);
        formData.append(`imgs`, e.target.files.item(i) as File);
      }
      setUploadedImgState();
    }
  };
  return { uploadedImg, setUploadedImgState, onChangeImg };
};

export default useImgUpload;

// mutationKey: ["img", "upload"],
// mutationFn: async (formData: FormData) => {
//   try {
//     const data = await axios({
//       method: "post",
//       url: "api/upload/upload",
//       headers: {
//         "Content-type": "multipart/form-data",
//       },
//       data: formData,
//     });
//     return data;
//   } catch (err) {
//     console.error(err);
//     return undefined;
//   }
// },

// const { data, mutate } = useMutation({
//     mutationKey: ["img", "upload"],
//     mutationFn: async (formData: FormData) => {
//       try {
//         const data = await axios({
//           method: "post",
//           url: "api/upload/upload",
//           headers: {
//             "Content-type": "multipart/form-data",
//           },
//           data: formData,
//         });
//         return data;
//       } catch (err) {
//         console.error(err);
//         return undefined;
//       }
//     },
//   });
