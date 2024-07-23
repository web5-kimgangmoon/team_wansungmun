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

      <Modal
        className=""
        style={customStyles}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <div>
          <div className="font-bold">고객정보</div>
          <div className="border-b mb-2">
            <div className="flex justify-between py-2">
              <div>
                <div>010-1234-1234</div>
                <div>김하나</div>
              </div>
              <div className="flex items-center">
                <LongButton textColor="white" bgColor="blue">
                  수정
                </LongButton>
              </div>
            </div>
          </div>

          <div>
            <div className="flex py-2">
              <div className="font-bold">총 결제금액 :</div>
              <div className="pl-2">
                <input type="text" className="bg-cusGray rounded w-[100%]" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between mb-2">
                <div className="font-bold">잔여포인트</div>
                <div className="flex gap-2">
                  <div>5000</div>
                  <div className="font-bold">Point</div>
                </div>
              </div>
              <div className="p-2">
                <LongButton textColor="white" bgColor="blue" onClick={() => {}}>
                  충전하기
                </LongButton>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PointCharge;
