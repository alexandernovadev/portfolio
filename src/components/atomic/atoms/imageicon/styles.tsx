import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { ImageIconProps } from './types'

export const sizeMap = {
  small: '40px',
  medium: '60px',
  large: '80px',
} as const

export const ImageIconStyle = styled(Image)<ImageIconProps>`
  width: ${({ size }) => (size ? sizeMap[size] : sizeMap['medium'])};
  height: ${({ size }) => (size ? sizeMap[size] : sizeMap['medium'])};
  cursor: pointer;
  
  box-shadow: inset 4px 4px 5px ${({ theme }) => theme.colors.shadowLight},
    inset -4px -4px 5px ${({ theme }) => theme.colors.shadowDark};

  border-radius: 50%;
  padding: 12px;
`
