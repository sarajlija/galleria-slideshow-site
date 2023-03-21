import React from "react"
import { Container, Card, Col, Row } from "react-bootstrap"
import data from "../data.json"

console.log(data)
/*
const numCols = 3
const colHeights = Array(numCols).fill(0)
const container = document.querySelector(".col")
Array.from(container.children).forEach((child, i) => {
  const order = i % numCols
  child.style.order = order
  colHeights[order] += parseFloat(child.clientHeight)
})
container.style.height = Math.max(...colHeights) + "px"*/

function Gallery() {
  return (
    <Container className="">
      <Row xs={1} md={2} lg={4} className=" g-4 mt-2" style={{ maxHeight: "900px" }}>
        {data.map((item, index) => (
          <Col key={index} className="width-25">
            <Card className="" bsPrefix="card">
              <Card.Img src={item.images.thumbnail} bsPrefix="card-img " className="" />
              <Card.ImgOverlay className="text-light h-100  d-flex justify-content-end align-items-start flex-column " bsPrefix="card-img-overlay">
                <Card.Title className="fs-4 fw-bold">{item.name}</Card.Title>
                <Card.Text className="opacity-75" style={{ fontSize: "13px" }}>
                  {item.artist.name}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Gallery
