import { useState } from "react";
import Svg from "../../../svgs/Check";
import downSvg from "../../../svgs/Chevron-down";
import Header from "../../Header";
import LongButton from "../../Public/Body/LongButton";
import PictureBox from "../../Public/Body/PictureBox";
import useImgUpload from "../../Public/Body/PictureBox/hooks/useImgUpload";
import TextArea from "../../Public/Body/TextArea";
import MenuBar from "../../Public/Footer/MenuBar";
import SingleTextBox from "../../Public/Header/singleTextBox";
import useRecommend from "../recommendList/hooks/useRecommend";
import RecommendList from "../recommendList/RecommendList";
import { MouseEvent } from "react";

const ReportWrite = () => {
  // const [textAreaData, setTextAreaData] = useState<string>("");
  const { uploadedImg, onChangeImg } = useImgUpload(5);
  const { recommendIndex, setRecommendIndex } = useRecommend();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <div>
      <div>
        <Header />
        <div className="flex relative">
          <SingleTextBox
            isOpenModal={isOpenModal}
            titleNPath={[
              ["신고중", "/reportWrite"],
              ["후기작성중", "/reviewWrite"],
            ]}
            onClick={(e) => {
              setIsOpenModal(true);
            }}
            closeOnClick={(e: MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setIsOpenModal(false);
            }}
          >
            신고중
          </SingleTextBox>
        </div>
      </div>
      <div className="container">
        <div className="py-2">
          <TextArea
            placeholder="거래에 대한 솔직한 신고사유를 남겨주세요. 그리고 신고 사유항목에서 선택해 주세요."
            rows={10}
            onChange={(e) => {
              // setTextAreaData(e.target.value);
            }}
          />
        </div>
        <div>
          <PictureBox
            data={uploadedImg}
            onChangeImg={onChangeImg}
            limit={5}
            idStr="picture"
          />
        </div>
        <RecommendList
          recommendList={[
            "판매자의 매너가 좋습니다",
            "물건의 상태와 질이 좋습니다",
            "거래가 정직하고 신속하게 진행되었습니다",
            "기타",
          ]}
          recommendIndex={recommendIndex}
          setRecommendIndex={setRecommendIndex}
          Svg={Svg}
          color="red"
        />
        <div className="pt-6">
          <LongButton bgColor="red" textColor="white">
            신고작성 완료
          </LongButton>
        </div>
      </div>
      <MenuBar />
    </div>
  );
};

export default ReportWrite;
