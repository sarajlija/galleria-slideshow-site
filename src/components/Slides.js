import React from "react"
import dataslideshow from "../dataslideshow.json"
import { useGlobalContext } from "../context"
import { Col, Container, Row, Button, Modal, Card, Image } from "react-bootstrap"

function Slides() {
  let slideIndex = 1
  showSlides(slideIndex)

  // Next/previous controls

  const plusSlides = n => {
    showSlides((slideIndex += n))
  }

  // Thumbnail image controls

  function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("mySlides")

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }

    slides[slideIndex - 1].style.display = "block"
  }

  const { show, handleClose, handleShow, selectedSlide, windowWidth, breakpointColumnsObj } = useGlobalContext()
  return (
    <Container className="slideshow-container">
      {dataslideshow.map(slide => (
        <Row key={slide.images.gallery} className="mySlides">
          <Col>
            <Card className="border-0 ">
              <Card.Img src={windowWidth > 576 ? slide.images.hero.large : slide.images.hero.small} alt={slide.name} />
              <Card.Img src={slide.artist.image} alt="Card image" bsPrefix="img__artist" />
              <Card.Body className=" text-dark" bsPrefix="card-body__slideshow">
                <Card.Title>{slide.name}</Card.Title>
              </Card.Body>
            </Card>

            <Button variant="dark" onClick={() => handleShow(slide)}>
              <Image src="../assets/shared/view-image.png" alt="view image" className="me-2" />
              view image
            </Button>
            {selectedSlide && (
              <Modal show={show} onHide={handleClose} centered>
                <Button onClick={handleClose} style={{ top: "-2rem", fontSize: "1.1rem" }} className=" position-absolute end-0  rounded-0 bg-transparent border-0  ">
                  close
                </Button>
                <Image fluid src={selectedSlide} />
              </Modal>
            )}
          </Col>
          <Col>
            <Card className=" text-dark" bsPrefix="card__slide">
              <Card.Text bsPrefix="card-text__slide opacity-100">{slide.description}</Card.Text>
            </Card>{" "}
            <Card bsPrefix="card__slide">
              <Card.Text bsPrefix="card-text__year position-absolute">{slide.year}</Card.Text>
            </Card>
          </Col>
          <Row>
            <Col>
              <Card bsPrefix="card-galleria ">
                <Card.Title bsPrefix="card-title__galleria">{slide.name}</Card.Title>
                <Card.Text bsPrefix="card-text__galleria">{slide.artist.name}</Card.Text>
              </Card>
            </Col>
            <Col>
              <a href="/#" class="prev" onClick={() => plusSlides(-1)}>
                &#10094;
              </a>
              <a href="/#" class="next" onClick={() => plusSlides(1)}>
                &#10095;
              </a>
            </Col>
          </Row>
        </Row>
      ))}
    </Container>
  )
}

export default Slides
