import { useState } from "react";
import Modal from "react-modal";
import LongButton from "../../Public/Body/LongButton";
import { useNavigate } from "react-router-dom";
import LeftArrow from "./img/LeftArrow.png";
import useMapLocation from "../../Public/Body/KakaoMapLocationGetter/hooks/useMapLocation";
import KakaoMapLocationGetter from "../../Public/Body/KakaoMapLocationGetter";
import useMapAddress from "../../Public/Body/KakaoMapLocationGetter/hooks/useMapAddress";
import InputBox from "../../Public/Body/InputBox";

interface IProps {
  locaValue: string;
  setLocaValue: (str: string) => void;
  setDetailLoca: (str: string) => void;
  detailLoca: string;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 10,
  },
};

export const AddAddress = ({
  locaValue,
  setLocaValue,
  setDetailLoca,
  detailLoca,
}: IProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { setMapLocation, mapLocation } = useMapLocation();
  const { setMapAddress, mapAddress } = useMapAddress();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <LongButton
          textColor="black"
          bgColor="gray"
          onClick={(e) => {
            setModalOpen(true);
            // setTimeout(() => navigate("/"), 1000);
          }}
        >
          다른 주소로 요청하기
        </LongButton>
      </div>

      <Modal
        className=""
        style={customStyles}
        isOpen={modalOpen}
        onRequestClose={() => {}}
      >
        <div className="p-0">
          <div className="flex gap-3 py-3">
            <div className="pt-1" onClick={() => setModalOpen(false)}>
              <img src={LeftArrow} alt="" className="w-4 h-4 " />
            </div>
            <div className="w-[16rem]">주소추가</div>
          </div>
          <div className="p-2">
            {/* <input
              type="text"
              placeholder="이름"
              className="mb-2 border-b w-full"
            />
            <input
              type="text"
              placeholder="휴대폰 번호"
              className="mb-2 border-b w-full"
            /> */}
            <div className="">주소</div>
            <div className="mb-2 border-b w-full">{mapAddress}</div>
            <InputBox
              title="상세 주소를 입력해주세요"
              placeholder="상세주소"
              value={detailLoca}
              onInput={(e) => setDetailLoca(e.target.value)}
              type="string"
            />
            <KakaoMapLocationGetter
              setMapLocation={setMapLocation}
              mapLocation={mapLocation}
              setMapAddress={setMapAddress}
              mapAddress={mapAddress}
            />
          </div>
          <div>
            <div className="flex justify-between px-2">
              <div className="flex">
                <input type="checkbox" name="" id="" />
                <div> 개인정보 수집 이용 동의</div>
              </div>
              <div>자세히</div>
            </div>
            <div className="py-3">
              <LongButton
                textColor="white"
                bgColor="red"
                onClick={(e) => {
                  setLocaValue(mapAddress);
                  setModalOpen(false);
                }}
              >
                완료
              </LongButton>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddAddress;
