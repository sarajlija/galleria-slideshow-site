import React from "react"
import { Carousel, Col, Row, Button, Modal, Card, Image } from "react-bootstrap"
import dataslideshow from "../dataslideshow.json"

import { useGlobalContext } from "../context"

function SlideShow() {
  const { show, handleClose, handleShow, selectedSlide, windowWidth, breakpointColumnsObj } = useGlobalContext()

  return (
    <Carousel className="text-dark mb-5 " interval={null}>
      {dataslideshow.map(slide => (
        <Carousel.Item key={slide.images.gallery} className="">
          <Row>
            <Col sm={12} md={6} className="col__hero">
              <Image fluid src={windowWidth > 768 ? slide.images.hero.large : slide.images.hero.small} alt={slide.name} bsPrefix="img__hero" />
              <Image fluid src={slide.artist.image} alt="Card image" bsPrefix="img__artist" />
              <Button variant="dark" onClick={() => handleShow(slide)}>
                <Image src="../assets/shared/view-image.png" alt="view image" className="me-2" />
                view image
              </Button>{" "}
              <Card className="border-0" bsPrefix="card__name">
                <h1 className="text-dark">{slide.name}</h1>
                <Card.Body>
                  <Card.Text bsPrefix="card-text__text">{slide.artist.name}</Card.Text>
                </Card.Body>
              </Card>{" "}
              {selectedSlide && (
                <Modal show={show} onHide={handleClose} centered>
                  <Button onClick={handleClose} style={{ top: "-2rem", fontSize: "1.1rem" }} className=" position-absolute end-0  rounded-0 bg-transparent border-0  ">
                    close
                  </Button>
                  <Image fluid src={selectedSlide} />
                </Modal>
              )}
            </Col>
            <Col sm={12} md={6}>
              <Card md={12} className=" text-dark border-0" bsPrefix="card__slide">
                <Card.Text bsPrefix="card-text__slide opacity-100">
                  {slide.description}
                  <a className="source-link d-flex text-uppercase " href={slide.source}>
                    go to source
                  </a>
                </Card.Text>
              </Card>{" "}
              <Card bsPrefix="border-0">
                <Card.Text bsPrefix="card-text__year">{slide.year}</Card.Text>
              </Card>
            </Col>{" "}
            <Row>
              <Col md={12}>
                {" "}
                <Card bsPrefix="card-galleria ">
                  <hr className="w-50" />
                  <Card.Title bsPrefix="card-title__galleria">{slide.name}</Card.Title>
                  <Card.Text bsPrefix="card-text__galleria">{slide.artist.name}</Card.Text>
                </Card>
              </Col>
            </Row>
          </Row>{" "}
        </Carousel.Item>
      ))}{" "}
    </Carousel>
  )
}

export default SlideShow
