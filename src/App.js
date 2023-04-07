import React from "react"
import "./App.css"
import Header from "./components/Header"
import Gallery from "./components/Gallery"
import SlideShow from "./components/SlideShow"
import { useGlobalContext } from "./context"

import { Container } from "react-bootstrap"

function App() {
  const { startSlide, windowWidth } = useGlobalContext()

  console.log(windowWidth)
  return (
    <>
      <Container fluid className="px-4">
        <Header />
        {startSlide ? <Gallery /> : <SlideShow />}
      </Container>
    </>
  )
}

export default App
