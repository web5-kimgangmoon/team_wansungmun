import Button from "../Public/Body/Button";
import CenterBody from "../Public/Body/CenterBody";
import CheckNLabel from "../Public/Body/CheckBox/CheckNLabel";
import Dropdown from "../Public/Body/Dropdown";
import InputTextBox from "../Public/Body/InputBox";
import InputText from "../Public/Body/InputBox/InputText";
import LongButton from "../Public/Body/LongButton";
import PictureBox from "../Public/Body/PictureBox";
import TextArea from "../Public/Body/TextArea";
import Svg from "../../svgs/camere";
import useImgUpload from "../Public/Body/PictureBox/hooks/useImgUpload";

const Body = () => {
  const { uploadedImg, setUploadedImgState, onChangeImg } = useImgUpload();
  return (
    <CenterBody>
      <InputTextBox title="제목" placeholder="제목" />
      <Dropdown
        name="category"
        defaultStr="카테고리"
        options={[["ss", "ㅇㅇ"]]}
      />
      <div className="py-1 text-sm font-bold sm:bg-black md:bg-red">
        직거래 가능여부
      </div>
      <div className="pb-1">
        <Button textColor="black" bgColor="blue" isRounded={false}>
          직거래 가능
        </Button>
      </div>
      <CheckNLabel laTitle="가격 제안 받기" />
      <InputText placeholder="Point를 입력해주세요" />
      <div>
        <LongButton textColor="white" bgColor="blue">
          확인
        </LongButton>
      </div>
      <div className="py-1">
        <TextArea
          placeholder={`풍납1동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)

신뢰할 수 있는 거래를 위해 자세히 적어주세요.
과학기술정보통신부, 한국 인터넷진흥원과 함께 해요.`}
          rows={10}
        />
      </div>
      <div>
        <PictureBox idStr="1" onChangeImg={onChangeImg} data={uploadedImg} />
      </div>
    </CenterBody>
  );
};

export default Body;
