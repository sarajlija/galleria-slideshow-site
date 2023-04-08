import React, { useState, useContext, useEffect } from "react"

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  /*WINDOW RESIZE*/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const breakpointColumnsObj = {
    default: 4,
    laptop: 3,
    tablet: 2,
    mobile: 1
  }
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  })
  /***************/
  const [startSlide, setStartSlide] = useState(true)
  const [show, setShow] = useState(false)
  const [selectedSlide, setSelectedSlide] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleOpenSlide = () => {
    setStartSlide(false)
  }
  const handleCloseSlide = () => {
    setStartSlide(true)
  }

  const handleClose = () => setShow(false)
  const handleShow = slide => {
    setShow(true)
    setSelectedSlide(slide.images.gallery)
  }

  const handleOpenSlideInGallery = item => {
    setShow(true)
    setSelectedItem(item.images.gallery)
  }

  return (
    <AppContext.Provider
      value={{
        handleOpenSlide,
        handleCloseSlide,
        setStartSlide,
        startSlide,
        show,
        setShow,
        handleClose,
        handleShow,
        selectedSlide,
        windowWidth,
        breakpointColumnsObj,
        selectedItem,
        handleOpenSlideInGallery
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
