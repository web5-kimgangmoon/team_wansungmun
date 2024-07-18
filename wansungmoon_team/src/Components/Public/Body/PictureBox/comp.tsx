import { ChangeEvent } from "react";
import Svg from "../../../../svgs/camere";

interface IProps {
  idStr: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  limit: number;
  data: string[];
}

const PictureBox = ({ idStr, onChange, data, limit }: IProps): JSX.Element => {
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
          className="sm:w-12 w-24 xl:w-24 cursor-pointer"
          htmlFor={`${idStr}Uploader`}
        >
          {Svg}
        </label>
        <div className="sm:text-xs text-sm">{`사진 ${data.length}/${limit}`}</div>
      </div>
      <div className="flex gap-1 justify-center">
        {data.map((item, index) => (
          <div key={index} className="sm:w-12 w-24">
            <img src={item.toString()} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureBox;
