import Button from "react-bootstrap/Button";

const DelBtn = () => {
  return (
    <div className="border-t">
      <div className="mt-4 flex justify-end w-[92%]">
        <Button variant="warning">삭제하기</Button>
      </div>
    </div>
  );
};

export default DelBtn;
