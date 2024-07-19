import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

interface IProps {}

const AdminPage = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="font-black">
          Complete Moon Market
        </Navbar.Brand>
        <Navbar.Brand href="#login" className="">
          로그인
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AdminPage;
