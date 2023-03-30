import React from "react"
import { useGlobalContext } from "../context"
import { Modal, Image } from "react-bootstrap"
import dataslideshow from "../dataslideshow.json"

function ModalGallery() {
  const [showModal, setShowModal] = useState(false)
  console.log(showModal)

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)
  return (
    <>
      {dataslideshow.map((slide, index) => (
        <Modal key={index} showModal={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={slide.images.gallery} />
          </Modal.Body>
        </Modal>
      ))}
    </>
  )
}

export default ModalGallery
