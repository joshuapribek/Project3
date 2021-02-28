import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



function navbar() {
return (


<Navbar collapseOnSelect className="gradient border fixed-top" expand="lg"  >
  <Navbar.Brand className="text-black" href="#home">WanderList</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="text-black" href="/">Home</Nav.Link>
      <Nav.Link className="text-black" href="/Artistfind">Artistfind</Nav.Link>
      <Nav.Link className="text-black" href="/About">About</Nav.Link>

  
    </Nav>

  </Navbar.Collapse>
</Navbar>



)


}

export default navbar