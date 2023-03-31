import React from "react"
import { useGlobalContext } from "../context"
import { Modal, Image, Button } from "react-bootstrap"
import dataslideshow from "../dataslideshow.json"

function ModalGallery() {
  const { show, handleClose } = useGlobalContext()
  return (
    <>
      {/*<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image fluid src={slide.images.gallery} />
        </Modal.Body>
  </Modal>*/}
    </>
  )
}

export default ModalGallery
