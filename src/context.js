import React, { useState, useContext } from "react"

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [startSlide, setStartSlide] = useState(true)
  const handleOpenSlide = () => {
    setStartSlide(false)
  }
  const handleCloseSlide = () => {
    setStartSlide(true)
  }
  const [show, setShow] = useState(false)
  const [selectedSlide, setSelectedSlide] = useState(null)
  const handleClose = () => setShow(false)
  const handleShow = slide => {
    setShow(true)
    setSelectedSlide(slide.images.gallery)
  }
  /*
  const toggleIsClose = () => {
    setIsOpenSearch(true)
    setSugestionCityData([])
    setLocation(location)
  }

  const toCelsius = () => {
    setUnits(true)
  }
  const toFehrenheit = () => {
    setUnits(false)
  }


  const closeSearch = () => {
    setIsOpenSearch(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (location !== "undefined") {
      setLocation()
    } else {
      console.log("UNDEFINED")
      setLocation("Livno")
    }
  }*/
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
        selectedSlide
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
