import React, { useState } from "react"
import { Container, Carousel, Col, Row, Button, Modal, Card, Image } from "react-bootstrap"
import dataslideshow from "../dataslideshow.json"

import { useGlobalContext } from "../context"

function SlideShow() {
  const { show, handleClose, handleShow, selectedSlide } = useGlobalContext()

  return (
    <Container className="text-dark">
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

                <Button variant="dark" onClick={() => handleShow(slide)}>
                  <Image src="../assets/shared/view-image.png" alt="view image" className="me-5" />
                  view image
                </Button>
                {selectedSlide && (
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Image fluid src={selectedSlide} />
                    </Modal.Body>
                  </Modal>
                )}
                <Card bsPrefix="card-galleria">
                  <Card.Title bsPrefix="card-title__galleria">{slide.name}</Card.Title>
                  <Card.Text bsPrefix="card-text__galleria">{slide.artist.name}</Card.Text>
                </Card>
              </Col>
              <Col>
                <Card className=" text-dark" bsPrefix="card__slide">
                  <Card.Text bsPrefix="card-text__slide opacity-100">{slide.description}</Card.Text>
                </Card>{" "}
                <Card bsPrefix="card__slide">
                  <Card.Text bsPrefix="card-text__year position-absolute">{slide.year}</Card.Text>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default SlideShow
