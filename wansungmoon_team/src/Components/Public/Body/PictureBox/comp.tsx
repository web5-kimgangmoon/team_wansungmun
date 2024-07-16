import { ChangeEvent } from "react";
import Svg from "../../../../svgs/camere";

interface IProps {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  data: any;
}

const PictureBox = ({ id, onChange, data }: IProps): JSX.Element => {
  console.log(data);
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <input
          id={id}
          type="file"
          name="imgs"
          accept="image/*"
          onChange={onChange}
          multiple={true}
          hidden={true}
        />
        <label
          className="sm:w-6 md:w-12 lg:w-20 xl:w-24 cursor-pointer"
          htmlFor={id}
        >
          {Svg}
        </label>
        <div className="sm:text-xs text-sm">사진 0/5</div>
      </div>
      <div></div>
    </div>
  );
};

export default PictureBox;
