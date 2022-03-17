import { Container, Navbar } from "react-bootstrap";
import DropDownMenu from "./DropDownMenu";

const Header = () => {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            <p className="h4 font-weight-bold">My Local Football Field</p>
          </Navbar.Brand>
          <DropDownMenu />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
