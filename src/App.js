import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Gallery from "./components/Gallery"
import { BrowserRouter } from "react-router-dom"

import SlideShow from "./components/SlideShow"
function App() {
  const [state, setState] = useState(true)
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
    <BrowserRouter>
      <Header />
      <Gallery windowWidth={windowWidth} />
    </BrowserRouter>
  )
}

export default App
