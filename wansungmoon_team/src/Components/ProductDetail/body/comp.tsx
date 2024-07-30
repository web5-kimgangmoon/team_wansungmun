import Header from "../../Header";
import MenuBar from "../../Public/Footer/MenuBar";
import SingleTextBox from "../../Public/Header/singleTextBox";
import LongButton from "../../Public/Body/LongButton";
import { Link } from "react-router-dom";
import { MouseEvent } from "react";

interface IProps {
  src: string;
  title: string;
  price: number;
  category: string;
  content: string;
  isCanReview?: boolean;
  isReviewed?: boolean;
  isAbleDeliveryLocationCheck?: boolean;
  isPurchaser?: boolean;
  clickPreviousPath?: () => void;
  reviewPath?: string;
  onClickReviewWrite?: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickDeliveryCheck?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ProductDetail = ({
  src,
  title,
  price,
  category,
  content,
  isAbleDeliveryLocationCheck,
  isCanReview,
  isReviewed,
  isPurchaser = false,
  clickPreviousPath,
  reviewPath = "/",
  onClickDeliveryCheck,
  onClickReviewWrite,
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
      <div className="p-2">
        <div className="container p-2 border border-cusGray rounded-md">
          <div className="flex gap-5 items-center pb-2 border-b-2 border-etcWord">
            <div className="sm:w-12 sm:min-w-12 w-24 min-w-24">
              <img src={src} className="w-full" />
            </div>
            <div className="grow flex flex-col gap-1 text-sm font-bold">
              <div className="whitespace-pre-wrap break-all">{title}</div>
              <div className="truncate">{priceStr + " 원"}</div>
            </div>
          </div>
          <div className="py-2">
            <div className="whitespace-pre-wrap break-all border border-cusGray rounded-md">
              <div className="min-h-10 px-2 flex items-center text-xs text-etcWord font-bold">
                {`category ${category}`}
              </div>
              <div className="min-h-20 px-2 py-4 text-sm">{content}</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <LongButton
                bgColor="white"
                textColor="black"
                isBorder={true}
                onClick={clickPreviousPath}
              >
                되돌아가기
              </LongButton>
            </div>
            {isCanReview ? (
              <div>
                <LongButton
                  bgColor="green"
                  textColor="white"
                  onClick={onClickReviewWrite}
                >
                  후기작성
                </LongButton>
              </div>
            ) : (
              ""
            )}
            {isAbleDeliveryLocationCheck ? (
              <div>
                <LongButton
                  bgColor="blue"
                  textColor="white"
                  onClick={onClickDeliveryCheck}
                >
                  택배 위치 확인
                </LongButton>
              </div>
            ) : (
              ""
            )}

            {isReviewed ? (
              <div>
                <Link to={reviewPath}>
                  <LongButton bgColor="green" textColor="white">
                    후기확인
                  </LongButton>
                </Link>
              </div>
            ) : (
              ""
            )}
            {isReviewed && isPurchaser ? (
              <div>
                <LongButton bgColor="gray" textColor="black">
                  후기작성완료
                </LongButton>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
