import React from 'react'
import { ImageContainer, ImageStyle } from './styles'

export const Image = ({ style, src }: any) => {
  return (
    <ImageContainer>
      <ImageStyle style={style} src={src} alt="xxx" />
    </ImageContainer>
  )
}
