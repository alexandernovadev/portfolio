import React from 'react'
import { ImageIconStyle } from './styles'
import { ImageIconProps } from './types'

const index = ({ src, title="Tech" }: ImageIconProps) => {
  return <ImageIconStyle src={src} alt="tech" title={title} />
}

export default index
