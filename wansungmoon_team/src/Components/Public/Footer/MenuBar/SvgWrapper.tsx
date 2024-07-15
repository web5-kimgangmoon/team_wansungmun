interface IProps {
  className?: string;
  positionClass?: string; // absolute를 박은 svg
  isInActive?: boolean;
  svg: string;
}

const SvgWrapper = ({
  className = "",
  isInActive = false,
  positionClass = "",
  svg,
}: IProps): JSX.Element => {
  return (
    <div
      className={
        className + " " + positionClass + `${isInActive ? "text-gray-500" : ""}`
      }
    >
      <img src={svg} className="w-full" />
    </div>
  );
};
export default SvgWrapper;
