import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Gallery from "./components/Gallery"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import SlideShow from "./components/SlideShow"
import { useGlobalContext } from "./context"
function App() {
  const { startSlide } = useGlobalContext()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  })
  console.log(windowWidth)
  return (
    <>
      <Header />
      {startSlide ? <Gallery windowWidth={windowWidth} /> : <SlideShow />}
    </>
  )
}

export default App
