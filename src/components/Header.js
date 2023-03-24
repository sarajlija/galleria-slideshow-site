import React from "react"
import { Navbar, Container, Button } from "react-bootstrap"
import { useGlobalContext } from "../context"
function Header() {
  const { startSlide, handleCloseSlide, handleOpenSlide } = useGlobalContext()
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Galleries</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {startSlide ? (
            <Button variant="outline-dark" onClick={() => handleOpenSlide()}>
              START SLIDESHOW
            </Button>
          ) : (
            <Button variant="outline-dark" onClick={() => handleCloseSlide()}>
              CLOSE SLIDESHOW
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
