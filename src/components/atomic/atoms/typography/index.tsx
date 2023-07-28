import React, { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

// Define los tipos de tipografía permitidos
type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'a'
  | 'small'
  | 'label'
  | 'blockquote'
  | 'pre'

// Define las props del componente
interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: TypographyVariant
}

// Crea un componente de estilos para cada tipo de tipografía
const TypographyStyled = styled.div<TypographyProps>`
  ${({ variant, theme }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 2.5em;
          font-weight: ${theme.fontWeight.bold};
        `
      case 'h2':
        return css`
          font-size: 2em;
          font-weight: ${theme.fontWeight.bold};
        `
      case 'h3':
        return css`
          font-size: 1.75em;
          font-weight: ${theme.fontWeight.bold};
        `
      case 'h4':
        return css`
          font-size: 1.5em;
          font-weight: ${theme.fontWeight.bold};
        `
      case 'h5':
        return css`
          font-size: 1.25em;
          font-weight: ${theme.fontWeight.bold};
        `
      case 'h6':
        return css`
          font-size: 1em;
          font-weight: ${theme.fontWeight.bold};
        `
      case 'p':
        return css`
          font-size: 1em;
          font-weight: ${theme.fontWeight.normal};
        `
      case 'span':
        return css`
          font-size: 1em;
          font-weight: ${theme.fontWeight.light};
        `
      case 'a':
        return css`
          font-size: 1em;
          font-weight: ${theme.fontWeight.normal};
          color: ${theme.colors.highlight};
          text-decoration: none;
        `
      case 'small':
        return css`
          font-size: 0.75em;
          font-weight: ${theme.fontWeight.light};
        `
      case 'label':
        return css`
          font-size: 1em;
          font-weight: ${theme.fontWeight.normal};
        `
      case 'blockquote':
        return css`
          font-size: 1.5em;
          font-weight: ${theme.fontWeight.light};
          color: ${theme.colors.disabled};
        `
      case 'pre':
        return css`
          font-size: 1em;
          font-weight: ${theme.fontWeight.light};
          background-color: ${theme.colors.shadowDark};
          padding: ${theme.spacing.x2};
        `
      default:
        return css``
    }
  }}
`

const Typography = ({ children, variant = 'p', ...props }: TypographyProps) => {
  return (
    <TypographyStyled variant={variant} {...props}>
      {children}
    </TypographyStyled>
  )
}

export default Typography
