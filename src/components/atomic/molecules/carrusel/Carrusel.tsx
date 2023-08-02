import React, { useEffect, useRef, useState } from 'react'
import { useSpring } from '@react-spring/web'
import { ButtonContainer, CarruselStyle } from './Carrusel.style'
import { Image } from '@/components/atomic/atoms/image/Image'
import IconButton from '../../atoms/buttonicon'

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { CarruselProps } from './carrusel.type'

const Carousel = ({images}:CarruselProps) => {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)


  const updateIndex = (newIndex: number) => {
    setIndex(newIndex)
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setIndex((state) => (state + 1) % images.length)
    }, 3000)
  }

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
  })

  const prevImage = () => {
    updateIndex((index - 1 + images.length) % images.length)
  }

  const nextImage = () => {
    updateIndex((index + 1) % images.length)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((state) => (state + 1) % images.length)
    }, 3000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [images.length])

  return (
    <CarruselStyle>
      <ButtonContainer>
        <IconButton onClick={prevImage} icon={FaArrowAltCircleLeft} />
        <IconButton onClick={nextImage} icon={FaArrowAltCircleRight} />
      </ButtonContainer>

      <Image style={props} src={images[index]} alt="xxx" />
    </CarruselStyle>
  )
}

export default Carousel
