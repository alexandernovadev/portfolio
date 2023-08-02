import { animated } from '@react-spring/web'
import styled from 'styled-components'

export const ImageStyle = styled(animated.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`


export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`