import { ChangeEvent, useState } from "react";

const useImgUpload = () => {
  const [uploadedImg, setUploadedImg] = useState<FormData | undefined>(
    undefined
  );

  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 5) {
      return;
    }
    const formData = new FormData();
    if (e.target && e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        formData.append(`imgs`, e.target.files.item(i) as File);
      }
      setUploadedImg(formData);
    }
  };
  return { uploadedImg, setUploadedImg, onChangeImg };
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
