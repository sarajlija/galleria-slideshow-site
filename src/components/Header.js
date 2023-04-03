import React from "react"
import { Navbar, Container, Button } from "react-bootstrap"
import { useGlobalContext } from "../context"
function Header() {
  const { startSlide, handleCloseSlide, handleOpenSlide } = useGlobalContext()
  return (
    <Container fluid>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">galleria.</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {startSlide ? (
              <Button variant="outline-dark rounded-0" onClick={() => handleOpenSlide()}>
                START SLIDESHOW
              </Button>
            ) : (
              <Button variant="outline-dark rounded-0" onClick={() => handleCloseSlide()}>
                CLOSE SLIDESHOW
              </Button>
            )}
          </Navbar.Collapse>
        </Container>{" "}
      </Navbar>{" "}
    </Container>
  )
}

export default Header
