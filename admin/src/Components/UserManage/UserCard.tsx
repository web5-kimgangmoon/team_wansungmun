import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Gom from "./gom.png";

function UserCard() {
  return (
    <div className="ml-2 flex justify-between">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Gom} />
        <Card.Body>
          <Card.Title>유저이메일</Card.Title>
          <Card.Text>유저닉네임</Card.Text>
          <div className="flex gap-4">
            <div>
              <Button variant="danger">삭제</Button>
            </div>
            <div>
              <Button variant="warning">정지</Button>
            </div>
            <div>
              <Button variant="success">정지해제</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
