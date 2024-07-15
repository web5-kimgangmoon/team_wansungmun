import arrow from "../../../../imgs/Chevron-down.svg";

interface IProps {
  options: [string, string][];
  name?: string;
  defaultStr: string;
}

const Dropdown = ({ name = "", options, defaultStr }: IProps): JSX.Element => {
  return (
    <div className="relative p-1">
      <div className="absolute w-5 h-5 right-3 top-3">
        <img src={arrow} className="w-full" />
      </div>
      <select
        name={name}
        className="p-1 pr-6 border outline-none w-full appearance-none font-bold"
      >
        <option value={""}>{defaultStr}</option>
        {options.map((item) => (
          <option value={item[0]}>{item[1]}</option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
