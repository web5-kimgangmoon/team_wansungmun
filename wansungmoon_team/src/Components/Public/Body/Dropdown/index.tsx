import { ChangeEvent } from "react";
import arrow from "../../../../imgs/Chevron-down.svg";

interface IProps {
  options: [string, string][];
  name?: string;
  defaultStr: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = ({
  name = "",
  options,
  defaultStr,
  onChange,
}: IProps): JSX.Element => {
  return (
    <div className="relative p-1 w-full">
      <div className="absolute w-5 h-5 right-2 top-2">
        <img src={arrow} className="w-full" alt="" />
      </div>
      <select
        name={name}
        className="p-1 pr-6 border outline-none w-full appearance-none font-bold"
      >
        <option value={""} key={0}>
          {defaultStr}
        </option>
        {options.map((item, index) => (
          <option value={item[0]} key={index + 1}>
            {item[1]}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
