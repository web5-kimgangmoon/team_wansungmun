import React from "react";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import LongButton from "../../Public/Body/LongButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../../Login";
import axios from "axios";

interface IProps {
  price: number;
  reqContent: string;
  productId: number;
  locaValue: string;
  userpoint: number;
}

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

export const PayComplete = ({
  price,
  reqContent,
  productId,
  locaValue,
  userpoint,
}: IProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cantBuy, setCantbuy] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async () => {
    if (userpoint - price < 0) {
      setCantbuy(true);
    } else {
      const payComplete = await axios.post(
        "/api",
        {
          reqContent: reqContent,
          productId: productId,
          locaValue: locaValue,
        },
        { withCredentials: true }
      );

      if (payComplete.status == 211) {
        setModalOpen(true);
        setTimeout(() => navigate("/"), 1000);
      } else {
        alert("구매에 실패했습니다!");
      }
    }
  };
  return (
    <div>
      {/* <Link to={"/login"}> */}
      <div>
        <LongButton
          textColor="white"
          bgColor="realRed"
          onClick={(e) => {
            onSubmit();
          }}
        >
          구매하기
        </LongButton>
      </div>
      {/* </Link> */}

      <Modal
        className=""
        style={customStyles}
        isOpen={modalOpen}
        onRequestClose={() => {}}
      >
        <div className="flex justify-center items-center">구매완료</div>
      </Modal>
      <Modal style={customStyles} isOpen={cantBuy} onRequestClose={() => {}}>
        <div className="flex justify-center items-center">
          잔액이 부족합니다!
        </div>
      </Modal>
    </div>
  );
};

export default PayComplete;
