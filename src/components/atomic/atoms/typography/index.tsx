import React from 'react'
import { TypographyProps } from './types'
import { TypographyStyled } from './styles'

const Typography = ({ variant, children, ...props }: TypographyProps) => {
  return (
    <TypographyStyled as={variant} variant={variant} {...props}>
      {children}
    </TypographyStyled>
  )
}

export default Typography
