interface IProps {
  // reqContent: string;
  setReqContent: (str: string) => void;
}

const RequestContent = ({ setReqContent }: IProps) => {
  return (
    <div className="p-1 border-b">
      <div className="font-bold">거래 요청사항</div>
      <div className="text-sm py-1">판매자에게 전달되는 요청사항입니다.</div>
      <div className="p-2">
        <input
          type="text"
          placeholder="예) 포장 꼼꼼하게 부탁드려요"
          className="bg-cusGray rounded-2xl w-full pl-2"
          onChange={(e) => {
            setReqContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default RequestContent;
