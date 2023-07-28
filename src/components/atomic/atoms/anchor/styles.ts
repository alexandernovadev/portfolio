import styled, { css } from 'styled-components'
import { AnchorProps } from './types'

export const AnchorStyled = styled.a<AnchorProps>`
  text-decoration: none;
  cursor: pointer;
  border-radius: 50px;
  padding: ${({ theme }) => theme.spacing.x2};
  font-size: 16px;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  margin: ${({ theme }) => theme.spacing.x1};
  max-height: 40px;

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
      color: ${theme.colors.highlight};
      background: transparent;
      text-decoration: underline;
    `}
`
