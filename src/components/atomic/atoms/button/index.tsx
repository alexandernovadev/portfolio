import React from 'react'
import { ButtonProps } from './types'
import { ButtonStyled } from './styles'

const Button = ({ children, variant = 'default', ...props }: ButtonProps) => {
  return (
    <ButtonStyled variant={variant} {...props}>
      {children}
    </ButtonStyled>
  )
}

export default Button
