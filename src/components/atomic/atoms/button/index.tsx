import React, { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'filled' | 'disabled'
}

const ButtonStyled = styled(({ ...rest }: ButtonProps) => <button {...rest} />)`
  border-radius: 50px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  outline: none;
  margin:  ${({ theme }) => theme.spacing.x1};
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

const Button = ({ children, variant = 'default', ...props }: ButtonProps) => {
  return (
    <ButtonStyled variant={variant} {...props}>
      {children}
    </ButtonStyled>
  )
}

export default Button
