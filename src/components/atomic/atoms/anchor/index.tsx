import React from 'react'
import styled, { css } from 'styled-components'

// Define las props del componente
interface AnchorProps {
  href: string
  variant?: 'default' | 'highlight' | 'filled' | 'neumorphic' | 'purple'
  children: React.ReactNode
}

// Define el componente de estilos
const AnchorStyled = styled.a<AnchorProps>`
  text-decoration: none;
  cursor: pointer;
  border-radius: 50px;
  padding: ${({ theme }) => theme.spacing.x1};
  font-size: 16px;
  width: 100%;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  margin: ${({ theme }) => theme.spacing.x1};

  &:hover {
    transform: scale(1.02);
  }

  ${({ variant, theme }) =>
    variant === 'default' &&
    css`
      color: ${theme.colors.buttonText};
      background: ${theme.colors.background};
      box-shadow: 6px 6px 8px ${theme.colors.shadowLight},
        -6px -6px 8px ${theme.colors.shadowDark};
    `}

  ${({ variant, theme }) =>
    variant === 'highlight' &&
    css`
      color: ${theme.colors.highlight};
      background: transparent;
      text-decoration: underline;
    `}

  ${({ variant, theme }) =>
    variant === 'filled' &&
    css`
      color: ${theme.colors.buttonText};
      background: ${theme.colors.highlight};
      box-shadow: inset 4px 4px 5px ${theme.colors.shadowLight},
        inset -4px -4px 5px ${theme.colors.shadowDark};
      transform: scale(1.08);

      &:hover {
        transform: scale(1.098);
      }
    `}
    

    
  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      color: purple;
      background: transparent;
      text-decoration: underline;
    `}
`

// Define el componente principal
const Anchor = ({ href, variant = 'default', children }: AnchorProps) => {
  return (
    <AnchorStyled href={href} variant={variant}>
      {children}
    </AnchorStyled>
  )
}

export default Anchor
