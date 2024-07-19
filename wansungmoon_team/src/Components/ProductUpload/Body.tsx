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

const Body = () => {
  const [currentAddress, setCurrentAddress] = useState<{
    address: string;
    isOpenModal: boolean;
  }>({ address: "거래희망장소", isOpenModal: false });
  const { uploadedImg, setUploadedImg, onChangeImg } = useImgUpload(5);
  const deliveryFee = useSwap();
  const { mapLocation, setMapLocation } = useMapLocation();
  const { mapAddress, setMapAddress } = useMapAddress();
  const [etcData, setEtcData] = useState<{
    category: string;
    isPropose: boolean;
    point: number;
    content: string;
    title: string;
  }>({ category: "", isPropose: false, point: 0, content: "", title: "" });
  console.log(etcData);
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
        options={[["ss", "ㅇㅇ"]]}
        onChange={(e) => {
          setEtcData({ ...etcData, category: e.target.value });
        }}
      />
      <BoldLine>직거래 가능 여부</BoldLine>
      <div className="pb-1">
        <Button textColor="black" bgColor="blue">
          직거래 가능
        </Button>
      </div>
      <CheckNLabel
        laTitle="가격 제안 받기"
        onChange={(e) => {
          setEtcData({ ...etcData, isPropose: !etcData.isPropose });
        }}
      />
      <InputText
        placeholder="Point를 입력해주세요"
        type="number"
        onInput={(e) => {
          setEtcData({ ...etcData, point: Number(e.target.value) });
        }}
      />
      <div className="py-1">
        <TextArea
          placeholder={`풍납1동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)

신뢰할 수 있는 거래를 위해 자세히 적어주세요.
과학기술정보통신부, 한국 인터넷진흥원과 함께 해요.`}
          rows={10}
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
      <BoldLine>택배거래</BoldLine>
      <SwapButton
        swapClick={deliveryFee.swapClick}
        isSwapped={deliveryFee.isSwapped}
        btnA="배송비 포함"
        btnB="배송비 별도"
      />
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
        <LongButton bgColor="blue" textColor="white">
          거래할 물건 올리기
        </LongButton>
      </div>
    </CenterBody>
  );
};

export default Body;

/* <button
onClick={async (e) => {
  try {
    let data = await axios({
      method: "post",
      url: "http://localhost:3080/api/upload/upload",
      // headers: {
      //   "Content-type": "multipart/form-data",
      // },
      data: uploadedImg,
      params: {
        content: `ㅏㄴㅇ러ㅏㅣ너리ㅏ넝림너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴ
          ㅇ마러ㅣㅁㄴ어라ㅣㅁㄴ어리ㅓ미나러ㅣ멍ㄴ라머인라ㅓㅁ
          ㄴ아ㅣ러ㅣㅁㅇ너리ㅏㅁ넝리ㅏㅓㅇ니라ㅓㅏㅣㄴㅇ머리먼아럼닝러마ㅣㄴ런이머
          리ㅏ먼ㅇ리ㅏㅓㅁ닝런미ㅏㄹ어ㅏㄴㅇ러ㅏㅣ너리ㅏ넝림너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러ㅣㅁ
          ㄴ어라ㅣㅁㄴ어리ㅓ미나러ㅣ멍ㄴ라머인라ㅓㅁㄴ아ㅣ러ㅣㅁㅇ너리ㅏㅁ넝리ㅏㅓㅇ니라ㅓㅏ
          ㅣㄴㅇ머리먼아럼닝러마ㅣㄴ런이머리ㅏ먼ㅇ리ㅏㅓㅁ닝런미ㅏㄹ어ㅏㄴㅇ러ㅏㅣ너리ㅏ넝림너아러ㅣㅁ너
          린ㅁ어라ㅣㅓㄴㅇ마러ㅣㅁㄴ어라ㅣㅁㄴ어리ㅓ미나러ㅣ멍ㄴ라머인라ㅓㅁㄴ아ㅣ러ㅣㅁㅇ너리ㅏㅁ넝리
          ㅏㅓㅇ니라ㅓㅏㅣㄴㅇ머리먼아럼닝러마ㅣㄴ런이머리ㅏ먼ㅇ리ㅏㅓㅁ닝런미ㅏㄹ어ㅏㄴㅇ러ㅏㅣ너리ㅏ넝림
          너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러
          너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러
          너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러
          너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러
          너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러
          너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러
          너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러너아러ㅣㅁ너린ㅁ어라ㅣㅓㄴㅇ마러`,
      },
      // withCredentials: true,
    });
  } catch (err) {
    console.error(err);
  }
  // console.log(data);
  // const src = JSON.parse(data);
  // console.log(src);
}}
>
ㅇㅇ
</button> */

// 한번에 formdata와 json 형식의 데이터를 보낼 수는 없습니다. 그러니까
// formdata와 쿼리로 보내거나 요청을 두번으로 나누어 보내거나
// 쿼리문을 이용합시다
