// import React from "react";
import { useState } from "react";
// import Button from "../../../Public/Body/Button";
// import { useRecoilState } from "recoil";
import Modal from "react-modal";
export const ModalComp = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={(e) => setModalOpen(true)}>
        모달 열기
      </button>
      <Modal
        className={""}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        HONEY BEE
      </Modal>
    </div>
  );
};

export default ModalComp;

//   return (
//     <div>
//       <Modal></Modal>
//       {/* <div className="flex justify-center mt-[5rem]">
//         <Button
//           textColor="black"
//           bgColor="gray"
//           onClick={() => setModalOpen(true)}
//         >
//           현재 주소로 찾기
//         </Button>
//       </div>
//       {modalOpen && (
//         <div
//           className="Modal-container"
//           ref="modalBackground"
//           onClick={(e) => {
//             if (e.target === modalBackground.current) {
//               setModalOpen(false);
//             }
//           }}
//         >
//           <div className="bg-[#ffffff] ">
//             <p>오늘도 맨덜리에는 안개가 자욱하군요</p>
//             <p>날씨 얘기는 하지 마세요 댄버스 부인!!!</p>
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
