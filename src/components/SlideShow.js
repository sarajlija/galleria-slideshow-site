import React from "react"
import { Container, Carousel, Col, Row, Button, Navbar, Image, Card } from "react-bootstrap"
import dataslideshow from "../dataslideshow.json"
import ModalGallery from "./ModalGallery"

function SlideShow() {
  return (
    <Container className="text-dark    ">
      <Carousel interval={null} className="">
        {dataslideshow.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row>
              <Col>
                <Card className="border-0 ">
                  <Card.Img src={slide.images.hero.large} alt={slide.name} />
                  <Card.Body className=" text-dark" bsPrefix="card-body__slideshow">
                    <Card.Title>{slide.name}</Card.Title>
                    <Card.Text>{slide.artist.name}</Card.Text>
                  </Card.Body>
                  <Card.Img src={slide.artist.image} alt="Card image" bsPrefix="img__artist" />
                </Card>
              </Col>

              <Col>
                <Card className=" text-dark " bsPrefix="card__slide">
                  <Card.Text bsPrefix="card-text__slide opacity-100">{slide.description}</Card.Text>
                </Card>{" "}
                <Card bsPrefix="card__slide">
                  <Card.Text bsPrefix="card-text__year position-absolute">{slide.year}</Card.Text>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Navbar bsPrefix="navbar-galleria">
                  <Card.Title>{slide.name}</Card.Title>
                  <Card.Text>{slide.artist.name}</Card.Text>
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
