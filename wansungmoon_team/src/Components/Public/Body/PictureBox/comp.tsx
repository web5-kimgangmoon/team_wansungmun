import { ChangeEvent } from "react";
import Svg from "../../../../svgs/camere";

interface IProps {
  idStr: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  data: any;
}

const PictureBox = ({ idStr, onChange, data }: IProps): JSX.Element => {
  console.log(data);
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <input
          id={`${idStr}Uploader`}
          type="file"
          name="imgs"
          accept="image/*"
          onChange={onChange}
          multiple={true}
          hidden={true}
        />
        <label
          className="sm:w-6 md:w-12 lg:w-20 xl:w-24 cursor-pointer"
          htmlFor={`${idStr}Uploader`}
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
