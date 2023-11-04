import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function NavbarComponent() {
  const { currentUser } = useContext(AuthContext);
  const Navigate = useNavigate();

  const ToggleLogout = () => {
    localStorage.removeItem('MailUser')
    Navigate("/login");
  };
  return (
    <Navbar className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home">Email</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text onClick={ToggleLogout}>
            <a className="cursor-pointer">Logout</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
