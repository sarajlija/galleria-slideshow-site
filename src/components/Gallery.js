import React from "react"
import Masonry from "react-masonry-css"
import { Container, Card, Col } from "react-bootstrap"
import data from "../data.json"
import { useGlobalContext } from "../context"

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
//windowWidth > 1024 ? HeroImageDesktop : windowWidth > 576 ? HeroImageTablet : HeroImageMobile}
const breakpointColumnsObj = {
  default: 4,
  laptop: 3,
  tablet: 2,
  mobile: 1
}

function Gallery({ windowWidth }) {
  const { handleShow } = useGlobalContext()
  return (
    <Container className="">
      <Masonry breakpointCols={windowWidth > 1024 ? breakpointColumnsObj.default : windowWidth > 768 ? breakpointColumnsObj.laptop : breakpointColumnsObj.mobile} className="my-masonry-grid d-flex flex-row" columnClassName="my-masonry-grid_column">
        {data.map((item, index) => (
          <Col key={index} className="">
            <Card className="border-0" bsPrefix="card">
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
      </Masonry>
    </Container>
  )
}

export default Gallery
