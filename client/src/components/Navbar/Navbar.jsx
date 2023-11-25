import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function NavbarComponent() {
  const { currentUser } = useContext(AuthContext);
  const Navigate = useNavigate();
console.log(currentUser)
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
          <h1 className="mr-3">{currentUser.data.email}</h1>
          <Navbar.Text onClick={ToggleLogout}>
            <a className="cursor-pointer outline rounded-sm px-1 py-1">Logout</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// not hit

export default NavbarComponent;
