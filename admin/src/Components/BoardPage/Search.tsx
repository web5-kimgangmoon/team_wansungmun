import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Search() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-75">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="검색하기"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              검색
            </Button>
          </InputGroup>
        </div>
      </div>
    </>
  );
}

export default Search;
