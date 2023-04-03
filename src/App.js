import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Gallery from "./components/Gallery"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import SlideShow from "./components/SlideShow"
import { useGlobalContext } from "./context"
import ModalGallery from "./components/ModalGallery"
import { Container } from "react-bootstrap"

function App() {
  const { startSlide, windowWidth, breakpointColumnsObj } = useGlobalContext()

  console.log(windowWidth)
  return (
    <>
      <Container fluid className="px-5">
        <Header />
        {startSlide ? <Gallery /> : <SlideShow />}
        <ModalGallery />
      </Container>
    </>
  )
}

export default App
