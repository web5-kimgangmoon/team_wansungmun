import Header from "../Header";
import MenuBar from "../Public/Footer/MenuBar";
import SingleTextBox from "../Public/Header/singleTextBox";
import LongButton from "../Public/Body/LongButton";
import { Link } from "react-router-dom";
import Stars from "../ReviewNreportWrite/Stars/Stars";
import Button from "../Public/Body/Button";
import Img from "../Public/Body/ImgModal";

interface IProps {
  src: string;
  title: string;
  price: number;
  content: string;
  previousPath?: string;
  productListPath?: string;
  score?: number;
  date?: Date;
  writer?: string;
  pictures?: string[];
}

const ReviewDetail = ({
  src,
  title,
  price,
  content,
  previousPath = "/",
  productListPath = "/",
  score = 1,
  date = new Date(),
  writer = "undefined",
  pictures = [],
}: IProps) => {
  const priceArr = price.toString().split("");
  let priceStr = priceArr
    .map((item, index) =>
      (priceArr.length - index) % 3 == 0 ? "," + item : item
    )
    .join("");
  if (priceStr.charAt(0) === ",") priceStr = priceStr.replace(",", "");
  return (
    <div>
      <div>
        <Header />
        <SingleTextBox>상품 리뷰</SingleTextBox>
      </div>
      <div className="px-2">
        <div className="container p-2 border border-cusGray rounded-md">
          <div className="flex gap-5 items-center pb-2 border-b-2 border-etcWord flex-row-reverse">
            <div className="sm:w-12 sm:min-w-12 w-24 min-w-24">
              <img src={src} className="w-full" />
            </div>
            <div className="grow flex flex-col gap-1 text-sm font-bold">
              <div className="flex gap-2">
                <div>
                  {`${date.getFullYear()}-${
                    date.getMonth() + 1
                  }-${date.getDate()} ${date.getHours() > 11 ? "오후" : "오전"} 
                  ${
                    date.getHours() > 12
                      ? (date.getHours() - 12).toString().padStart(2, "0")
                      : date.getHours().toString().padStart(2, "0")
                  }:${date.getMinutes().toString().padStart(2, "0")}`}
                </div>
                <div className="flex items-center">
                  <Button
                    isRounded={true}
                    isSmall={true}
                    bgColor="green"
                    textColor="black"
                  >
                    거래완료
                  </Button>
                </div>
              </div>
              <div className="truncate">
                <Stars score={score} starWidth="3" isNoBorder={true} />
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="whitespace-pre-wrap break-all border border-green rounded-md">
              <div>
                <div className="min-h-10 px-2 pt-2 pb-4 flex items-center text-base font-bold">
                  {`${title}`}
                </div>
                <div className="px-1 text-sm font-bold">{writer}</div>
                <div className="min-h-20 px-2 py-4 text-sm">{content}</div>
              </div>
              <div className="flex w-full justify-center pb-2 gap-2">
                {pictures.map((item, index) => (
                  // <div
                  //   key={index}
                  //   className="sm:w-12 sm:min-w-12 w-24 min-w-24"
                  // >
                  //   <img src={item} className="w-full" alt="사진" />
                  // </div>
                  <Img src={item} key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Link to={previousPath}>
                <LongButton bgColor="white" textColor="black" isBorder={true}>
                  되돌아가기
                </LongButton>
              </Link>
            </div>
            <div>
              <Link to={productListPath}>
                <LongButton bgColor="white" textColor="black" isBorder={true}>
                  이전 리스트 페이지로
                </LongButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MenuBar />
      </div>
    </div>
  );
};

export default ReviewDetail;
