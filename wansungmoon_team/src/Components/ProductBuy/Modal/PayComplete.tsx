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

export const PayComplete = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      {/* <Link to={"/login"}> */}
      <div>
        <LongButton
          textColor="white"
          bgColor="realRed"
          onClick={(e) => {
            setModalOpen(true);
            setTimeout(() => navigate("/login"), 1000);
          }}
        >
          구매하기
        </LongButton>
      </div>
      {/* </Link> */}

      <Modal className="" style={customStyles} isOpen={modalOpen} onRequestClose={() => {}}>
        <div className="flex justify-center items-center">구매완료</div>
      </Modal>
    </div>
  );
};

export default PayComplete;
