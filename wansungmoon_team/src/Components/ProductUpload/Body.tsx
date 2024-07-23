import Button from "../Public/Body/Button";
import CenterBody from "../Public/Body/CenterBody";
import CheckNLabel from "../Public/Body/CheckBox/CheckNLabel";
import Dropdown from "../Public/Body/Dropdown";
import InputTextBox from "../Public/Body/InputBox";
import InputText from "../Public/Body/InputBox/InputText";
import LongButton from "../Public/Body/LongButton";
import PictureBox from "../Public/Body/PictureBox";
import TextArea from "../Public/Body/TextArea";
import useImgUpload from "../Public/Body/PictureBox/hooks/useImgUpload";
import SwapButton from "../Public/Body/LongButton/SwapButton";
import useSwap from "../Public/Body/LongButton/SwapButton/hooks/useSwap";
import BoldLine from "../Public/Body/BoldLine";
import KakaoMapLocation from "../Public/Body/KakaoMapLocationGetter";
import useMapLocation from "../Public/Body/KakaoMapLocationGetter/hooks/useMapLocation";
import useMapAddress from "../Public/Body/KakaoMapLocationGetter/hooks/useMapAddress";
import { useState } from "react";
import ReactModal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [currentAddress, setCurrentAddress] = useState<{
    address: string;
    isOpenModal: boolean;
  }>({ address: "거래희망장소", isOpenModal: false });
  const { uploadedImg, setUploadedImg, onChangeImg } = useImgUpload(5);
  const isDirectEnable = useSwap();
  const { mapLocation, setMapLocation } = useMapLocation();
  const { mapAddress, setMapAddress } = useMapAddress();
  const [etcData, setEtcData] = useState<{
    category: number | undefined;
    point: number | undefined;
    content: string;
    title: string;
  }>({ category: undefined, point: undefined, content: "", title: "" });
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      console.log(uploadedImg);
      console.log(etcData);
      console.log(mapAddress);
      if (!uploadedImg) {
        alert("이미지를 업로드해주세요!");
      } else if (!etcData.category) {
        alert("카테고리를 선택해주세요!");
      } else if (!etcData.point) {
        alert("가격을 선택해주세요!");
      } else if (mapAddress == "거래희망장소!") {
        alert("거래 장소를 선택해주세요!");
      } else if (!etcData.title) {
        alert("제목을 입력해주세요!");
      } else if (!etcData.content) {
        alert("내용을 입력해주세요!");
      } else {
        const formData = new FormData();
        const imgArr = uploadedImg.getAll("imgs");

        for (let item of imgArr) {
          formData.append("imgs", item);
        }
        formData.set("productName", etcData.title);
        formData.set(
          "isDirectTrade",
          isDirectEnable.isSwapped ? "true" : "false"
        );
        formData.set("tradeLocation", mapAddress);
        formData.set("categoryId", etcData.category.toString());
        formData.set("price", etcData.point.toString());
        formData.set("content", etcData.content);
        let data = await axios({
          method: "post",
          url: "http://localhost:3080/api/upload/upload",

          data: formData,
          withCredentials: true,
        });
        if (data.status == 302) {
          alert("유저 정보를 찾을 수 없습니다");
        } else if (data.status == 201) {
          navigate("/");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <CenterBody>
      <InputTextBox
        title="제목"
        placeholder="제목"
        onInput={(e) => {
          setEtcData({ ...etcData, title: e.target.value });
        }}
      />
      <Dropdown
        name="category"
        defaultStr="카테고리"
        options={[["1", "ㅇㅇ"]]}
        value={etcData.category?.toString()}
        onChange={(e) => {
          if (!Number.isNaN(+e.target.value))
            setEtcData({ ...etcData, category: +e.target.value });
        }}
      />
      <BoldLine>직거래 가능 여부</BoldLine>
      <div className="pb-1">
        <SwapButton
          btnA={"직거래가능"}
          btnB={"직거래불가능"}
          isSwapped={isDirectEnable.isSwapped}
          swapClick={isDirectEnable.swapClick}
        />
      </div>
      <InputText
        placeholder="Point를 입력해주세요"
        type="number"
        onInput={(e) => {
          if (!Number.isNaN(e.target.value) || Number.isFinite(e.target.value))
            setEtcData({ ...etcData, point: Number(e.target.value) });
        }}
      />
      <div className="py-1">
        <TextArea
          placeholder={`게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)

신뢰할 수 있는 거래를 위해 자세히 적어주세요.`}
          rows={6}
          onChange={(e) => {
            setEtcData({ ...etcData, content: e.target.value });
          }}
        />
      </div>
      <div>
        <PictureBox
          idStr="1"
          limit={5}
          onChangeImg={onChangeImg}
          data={uploadedImg}
        />
      </div>
      <div
        className="py-2"
        onClick={() => {
          setCurrentAddress((item) => ({
            ...item,
            isOpenModal: !item.isOpenModal,
          }));
        }}
      >
        <LongButton bgColor="green" textColor="black">
          {currentAddress.address}
        </LongButton>
      </div>
      <ReactModal
        isOpen={currentAddress.isOpenModal}
        onRequestClose={() =>
          setCurrentAddress({ ...currentAddress, isOpenModal: false })
        }
      >
        <BoldLine>거래희망장소(직거래시)</BoldLine>
        <KakaoMapLocation
          mapLocation={mapLocation}
          setMapLocation={setMapLocation}
          mapAddress={mapAddress}
          setMapAddress={setMapAddress}
        />
        <div className="py-2">
          <div className="p-1 flex border border-cusGray rounded-xl">
            <div className="flex items-center p-1">
              <Button bgColor="blue" textColor="black">
                선택된 위치
              </Button>
            </div>
            <div className="flex items-center text-sm">{mapAddress}</div>
          </div>
        </div>
        <div className="py-1">
          <LongButton
            bgColor="blue"
            textColor="white"
            onClick={(e) => {
              setCurrentAddress({
                ...currentAddress,
                address: mapAddress,
                isOpenModal: false,
              });
            }}
          >
            위치선택
          </LongButton>
        </div>
      </ReactModal>
      <div className="py-2">
        <LongButton
          bgColor="blue"
          textColor="white"
          onClick={(e) => onSubmit()}
        >
          거래할 물건 올리기
        </LongButton>
      </div>
      <div>
        <button
          onClick={async (e) => {
            try {
              let data = await axios({
                method: "post",
                url: "http://localhost:3080/api/upload/upload",
                // headers: {
                //   "Content-type": "multipart/form-data",
                // },

                data: uploadedImg,
                withCredentials: true,
              });
              console.log(data);
            } catch (err) {
              console.error(err);
            }
          }}
        ></button>
      </div>
    </CenterBody>
  );
};

export default Body;

// 한번에 formdata와 json 형식의 데이터를 보낼 수는 없습니다. 그러니까
// formdata와 쿼리로 보내거나 요청을 두번으로 나누어 보내거나
// 쿼리문을 이용합시다
