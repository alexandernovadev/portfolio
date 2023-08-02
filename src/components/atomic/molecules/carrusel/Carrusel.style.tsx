import styled from 'styled-components'
import { CarruselProps } from './carrusel.type'

export const CarruselStyle = styled.div`
  position: relative;
  height: 400px;
  width: 600px;
  overflow: hidden;
`


export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  justify-content: space-between;
  border: none;
  padding: 10px;
  z-index: 1;
`
