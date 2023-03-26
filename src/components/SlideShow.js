import React from "react"
import { Container, Carousel, Col, Row, Button, Navbar } from "react-bootstrap"
import data from "../data.json"
import ModalGallery from "./ModalGallery"

function SlideShow() {
  return (
    <Container className="text-dark">
      <Carousel>
        {data.map((slide, index) => (
          <Carousel.Item interval={null} key={index}>
            <Row>
              <Col>
                <img className="d-flex w-100" src={slide.images.hero.large} alt="First slide" />
              </Col>

              <Col>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Navbar>
                  <Container>
                    <Navbar.Brand href="#home">galleria.</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                      <Button variant="outline-dark">START SLIDESHOW</Button>

                      <Button variant="outline-dark">CLOSE SLIDESHOW</Button>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default SlideShow
