import Button from "../Public/Body/Button";
import CenterBody from "../Public/Body/CenterBody";
import CheckNLabel from "../Public/Body/CheckBox/CheckNLabel";
import Dropdown from "../Public/Body/Dropdown";
import InputTextBox from "../Public/Body/InputBox";
import InputText from "../Public/Body/InputBox/InputText";
import LongButton from "../Public/Body/LongButton";

const Body = () => {
  return (
    <CenterBody>
      <InputTextBox sort="제목" />
      <Dropdown
        name="category"
        defaultStr="카테고리"
        options={[["ss", "ㅇㅇ"]]}
      />
      <div className="py-1 text-sm font-bold">직거래 가능여부</div>
      <div className="pb-1">
        <Button textColor="black" bgColor="blue">
          직거래 가능
        </Button>
      </div>
      <CheckNLabel>가격 제안 받기</CheckNLabel>
      <InputText placeholder="Point를 입력해주세요" />
      <div>
        <LongButton isBorder={true} textColor="black" bgColor="white">
          확인
        </LongButton>
      </div>
    </CenterBody>
  );
};

export default Body;
