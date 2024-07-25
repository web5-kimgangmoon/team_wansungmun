export interface IProps {
  titleImg: string;
}

const DetailPic = ({ titleImg }: IProps) => {
  return (
    <div className="flex justify-center p-2">
      <img src={titleImg} alt="" />
    </div>
  );
};

export default DetailPic;
