import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoNav from "../assets/img/svg/nav_logo.svg";
import heartIcon from "../assets/img/svg/heart_icon.svg";
// import heroBg from "../assets/img/png/hero_bg_img.png";
function MyNav() {
  return (
    <Navbar className="nav_bg_color py-3" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoNav} alt="logoNav" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link
              href="#home"
              className="ff_open_sans text-white fs_16 ms-lg-4 mt-5 mt-lg-0  fw-semibold position-relative underline"
            >
              LEARN
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="ff_open_sans text-white fs_16 ms-lg-4 mt-3 mt-lg-0  fw-semibold position-relative underline"
            >
              LISTINGS
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="ff_open_sans text-white fs_16 ms-lg-4 mt-3 mt-lg-0  fw-semibold position-relative underline"
            >
              COMMUNITIES{" "}
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="ff_open_sans text-white fs_16 ms-lg-4 mt-3 mt-lg-0  fw-semibold position-relative underline mb-0"
            >
              CONTACT{" "}
            </Nav.Link>
            <Navbar.Brand href="#home" className="ms-lg-4 mt-3 mt-lg-0 ">
              <img className="transition_time hover_scale" src={heartIcon} alt="logoNav" />
            </Navbar.Brand>
            <NavDropdown
              className="text-white  ms-lg-4 mt-3 mt-lg-0 fs-16 ff_open_sans fw-semibold "
              title="$ USD"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" className="d-none d-lg-block ms-lg-4">
              <span className="lining_icon"></span>
              <span className="lining_icon my-2"></span>
              <span className="lining_icon"></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
