import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Book Store
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/addbook">Add Book</Link>
        </li>
        <li>
          <Link href="#">Contact Us </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

//     <Navbar expand="lg" className="bg-body-warning">
//     <Container>
//       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ms-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Books</Nav.Link>
//           <Nav.Link href="#link">Add Book</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
