import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



function navbar() {
return (


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">WanderList</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Artistfind">Artistfind</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>

  
    </Nav>

  </Navbar.Collapse>
</Navbar>



)


}

export default navbar