import React from 'react'
import styled, { css } from 'styled-components'
import { IconType } from 'react-icons'

import { FaBeer } from 'react-icons/fa'

export const IconDefault = () => <IconButton icon={FaBeer} />

interface IconButtonProps {
  icon?: IconType
  variant?: 'default' | 'disabled' | 'filled'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

// Define el componente de estilos
const IconButtonStyled = styled.button<IconButtonProps>`
  display: flex;
  justify-content: center;
  z-index: 1;
  align-items: center;
  border-radius: 50%;
  width: ${({ size }) =>
    size === 'small' ? '30px' : size === 'medium' ? '40px' : '50px'};
  height: ${({ size }) =>
    size === 'small' ? '30px' : size === 'medium' ? '40px' : '50px'};
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    transform: scale(1.029);
  }

  &:active {
    box-shadow: inset 4px 4px 5px ${({ theme }) => theme.colors.shadowLight},
      inset -4px -4px 5px ${({ theme }) => theme.colors.shadowDark};
  }

  ${({ variant, theme }) =>
    variant == 'default' &&
    css`
      background: ${theme.colors.background};
      box-shadow: 6px 6px 8px ${theme.colors.shadowLight},
        -6px -6px 8px ${theme.colors.shadowDark};
      color: ${theme.colors.buttonText};
    `}

  ${({ variant, theme }) =>
    variant == 'disabled' &&
    css`
      color: ${theme.colors.disabled};
      cursor: not-allowed;
      background: ${theme.colors.background};
      box-shadow: 6px 6px 8px ${theme.colors.shadowLight},
        -6px -6px 8px ${theme.colors.shadowDark};
    `}

    ${({ variant, theme }) =>
    variant == 'filled' &&
    css`
      color: ${theme.colors.buttonText};
      background: ${theme.colors.highlight};
      box-shadow: inset 4px 4px 5px ${theme.colors.shadowLight},
        inset -4px -4px 5px ${theme.colors.shadowDark};
      font-weight: bold;
      transform: scale(1.08);

      &:hover {
        transform: scale(1.098);
      }
    `}
`

// Define el componente principal
const IconButton = ({
  icon: Icon,
  variant = 'default',
  size = 'medium',
  onClick,
}: IconButtonProps) => {
  return (
    <IconButtonStyled variant={variant} size={size} onClick={onClick}>
      {Icon ? <Icon /> : <IconDefault />}
    </IconButtonStyled>
  )
}

export default IconButton
