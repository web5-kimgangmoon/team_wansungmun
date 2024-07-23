import React from "react";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import LongButton from "../../Public/Body/LongButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../../Login";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const PointCharge = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <LongButton
          textColor="black"
          bgColor="gray"
          onClick={(e) => {
            setModalOpen(true);
          }}
        >
          충전하기
        </LongButton>
      </div>

      <Modal className="" style={customStyles} isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <div>
          <div>고객정보</div>
          <div className="flex">
            <div>
              <div>010-1234-1234</div>
              <div>김하나</div>
            </div>
            <div>
              <button className="">수정</button>
            </div>
          </div>
          <div></div>
        </div>
      </Modal>
    </div>
  );
};

export default PointCharge;
