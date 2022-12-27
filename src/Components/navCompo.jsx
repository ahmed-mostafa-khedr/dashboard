import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const NavbarCompo = () => {
  return (
    <>
      <Navbar  bg="dark" variant="dark" expand="md" style={{position:"relative"}}>
        <Container fluid>
        <Navbar.Brand href="# ">Dashboart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
    
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
           
<div className="d-flex" style={{position:"absolute" ,right:"16px"}}>
                <Nav.Link href="#" className="mx-2">Alert</Nav.Link>

                <Nav.Link className="mr-3" href="#">About</Nav.Link>

                <Nav.Link className="">
                  <i class="fab fa-google-plus-g text-white text-white" ></i>
                </Nav.Link>

                <Nav.Link className="mx-1">
                  <i class="fas fa-envelope-open-text text-white"></i>
                </Nav.Link>

                <Nav.Link className="">
                  <i class="fas fa-align-justify text-white"></i>
                </Nav.Link>
         
                </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarCompo;
