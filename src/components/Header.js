import React from "react"
import { Navbar, Container } from "react-bootstrap"

function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Galleries</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login"> START SLIDESHOW</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
