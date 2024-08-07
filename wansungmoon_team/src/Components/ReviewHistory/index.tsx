import Header from "../Header";
import MenuBar from "../Public/Footer/MenuBar";
import SingleTextBox from "../Public/Header/singleTextBox";
import Item from "./Item";
import bycle from "../../imgs/Kakao_logo.jpg";

const ReviewHistory = () => {
  const itemArr = [
    {
      detailPath: "/",
      srcs: [bycle, bycle],
      title: "중고자전거-싸게파는중!!!",
      score: 1,
      content: "잘 도착했습니다. 벽돌이 왔다는 것만 빼면요.",
      date: new Date(),
      onClickEvent: () => {},
    },
    {
      detailPath: "/",
      srcs: [],
      title: "중고자전거-파나요?",
      score: 4,
      content: "잘 도착했습니다. 감사합니다",
      date: new Date(Date.now() - 30000000000),
      onClickEvent: () => {},
    },
  ];
  return (
    <div>
      <div>
        <Header />
        <SingleTextBox>구매후기</SingleTextBox>
      </div>
      <div className="container">
        {itemArr.map((item) => (
          <Item
            detailPath={item.title}
            srcs={item.srcs}
            title={item.title}
            score={item.score}
            content={item.content}
            date={item.date}
            onclickEvent={item.onClickEvent}
          />
        ))}
      </div>
      <div>
        <MenuBar />
      </div>
    </div>
  );
};

export default ReviewHistory;
