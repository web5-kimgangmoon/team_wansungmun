import { useState } from "react";
// import LongButton from "../../Public/Body/LongButton";

interface IProps {}

const DeliveryBtn = () => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  const [value, setValue] = useState("배송시작");
  const changeValue = () => {
    setValue("배송중");
  };
  return (
    <div>
      <div className="w-[90%] mx-[5%] mt-2">
        <button
          className={`${
            clicked
              ? "w-full h-8 bg-red rounded font-bold"
              : "w-full h-8 bg-blueButton-long rounded font-bold"
          }`}
          onClick={() => {
            onClick();
          }}
        >
          {value}
        </button>
      </div>
    </div>
  );
};

export default DeliveryBtn;
