import { useState } from "react";
import Svg from "../../../svgs/Thumbs-up";
import Header from "../../Header";
import LongButton from "../../Public/Body/LongButton";
import PictureBox from "../../Public/Body/PictureBox";
import useImgUpload from "../../Public/Body/PictureBox/hooks/useImgUpload";
import TextArea from "../../Public/Body/TextArea";
import MenuBar from "../../Public/Footer/MenuBar";
import SingleTextBox from "../../Public/Header/singleTextBox";
import useRecommend from "../recommendList/hooks/useRecommend";
import RecommendList from "../recommendList/RecommendList";
import useScore from "../Stars/hooks/useScore";
import Stars from "../Stars/Stars";
import { MouseEvent } from "react";

const ReviewWrite = () => {
  const [textAreaData, setTextAreaData] = useState<string>("");
  const { uploadedImg, onChangeImg } = useImgUpload(5);
  const { recommendIndex, setRecommendIndex } = useRecommend();
  const { score, setScore } = useScore();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div>
      <div>
        <Header />
        <SingleTextBox
          isOpenModal={isOpenModal}
          titleNPath={[
            ["후기작성중", "/reviewWrite"],
            ["신고중", "/reportWrite"],
          ]}
          onClick={(e) => {
            setIsOpenModal(true);
          }}
          closeOnClick={(e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            setIsOpenModal(false);
          }}
        >
          후기작성중
        </SingleTextBox>
      </div>
      <div className="container">
        <div className="py-5 flex justify-center">
          <Stars score={score} setScore={setScore} />
        </div>
        <div className="py-2">
          <TextArea
            placeholder="거래에 대한 솔직한 후기를 남겨주세요. 거래에 만족하셨다면, 아래 거래 후기 항목에 별점을 매겨주세요."
            rows={3}
            onChange={(e) => {
              setTextAreaData(e.target.value);
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
        />
        <div className="pt-6">
          <LongButton bgColor="blue" textColor="white">
            리뷰작성 완료!
          </LongButton>
        </div>
      </div>
      <MenuBar />
    </div>
  );
};

export default ReviewWrite;
