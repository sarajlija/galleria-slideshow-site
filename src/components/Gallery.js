import React from "react"
import Masonry from "react-masonry-css"
import { Card, Col, Modal, Button, Image } from "react-bootstrap"
import data from "../data.json"
import { useGlobalContext } from "../context"

console.log(data)

function Gallery() {
  const { windowWidth, breakpointColumnsObj, handleOpenSlideInGallery, selectedItem, show, handleClose } = useGlobalContext()
  return (
    <>
      <Masonry breakpointCols={windowWidth > 1024 ? breakpointColumnsObj.default : windowWidth > 768 ? breakpointColumnsObj.tablet : breakpointColumnsObj.mobile} className="my-masonry-grid d-flex flex-row" columnClassName="my-masonry-grid_column">
        {data.map((item, index) => (
          <Col key={index} className="">
            <Card className="border-0" bsPrefix="card" onClick={() => handleOpenSlideInGallery(item)}>
              <Card.Img src={item.images.thumbnail} bsPrefix="card-img " className="" />
              <Card.ImgOverlay className="text-light h-100  d-flex justify-content-end align-items-start flex-column " bsPrefix="card-img-overlay">
                <Card.Title className="fs-4 fw-bold">{item.name}</Card.Title>
                <Card.Text className="opacity-75" style={{ fontSize: "13px" }}>
                  {item.artist.name}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            {selectedItem && (
              <Modal show={show} onHide={handleClose} centered>
                <Button onClick={handleClose} style={{ top: "-2rem", fontSize: "1.1rem" }} className=" position-absolute end-0  rounded-0 bg-transparent border-0  ">
                  close
                </Button>
                <Image fluid src={selectedItem} />
              </Modal>
            )}
          </Col>
        ))}
      </Masonry>
    </>
  )
}

export default Gallery
