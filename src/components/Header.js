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
          <Navbar.Collapse className="justify-content-end">
            {startSlide ? (
              <Button bsPrefix="btn__header" onClick={() => handleOpenSlide()}>
                START SLIDESHOW
              </Button>
            ) : (
              <Button bsPrefix="btn__header" onClick={() => handleCloseSlide()}>
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
