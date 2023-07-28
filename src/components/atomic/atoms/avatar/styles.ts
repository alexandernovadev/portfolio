import styled, { css } from 'styled-components'
import { AvatarProps } from './types'

const sizeMap = {
  small: '40px',
  medium: '60px',
  large: '80px',
}

export const AvatarStyled = styled.img<Partial<AvatarProps>>`
  width: ${({ size }) => (size ? sizeMap[size] : sizeMap['medium'])};
  height: ${({ size }) => (size ? sizeMap[size] : sizeMap['medium'])};
  border-radius: 50%;
  object-fit: cover;

  background: ${({ theme }) => theme.colors.highlight};
  box-shadow: inset 4px 4px 5px ${({ theme }) => theme.colors.shadowLight},
    inset -4px -4px 5px ${({ theme }) => theme.colors.shadowDark};
  transform: scale(1.08);

  &:hover {
    transform: scale(1.098);
  }
`
