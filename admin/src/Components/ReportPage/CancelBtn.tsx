import Button from "react-bootstrap/Button";

function CancelBtn() {
  return (
    <>
      <div className="border-t">
        <div className="mt-4 flex justify-end w-[92%] gap-4">
          <Button variant="success">신고취소</Button>
          <Button variant="warning">삭제하기</Button>
        </div>
      </div>
    </>
  );
}

export default CancelBtn;
