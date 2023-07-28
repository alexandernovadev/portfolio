import styled, { css } from 'styled-components'
import { TypographyProps } from './types'

export const TypographyStyled = styled.div<TypographyProps>`
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
