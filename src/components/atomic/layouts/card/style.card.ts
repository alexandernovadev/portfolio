import styled from 'styled-components'
import { CardPropStyle } from './types.card'

export const CardStyled = styled.div<CardPropStyle>`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing.x1};;
  display: flex;
  flex-direction: ${({ orientation }) => (orientation ? orientation : 'row')};
  justify-content: space-between;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.x2};
  box-shadow: 13px 13px 20px ${({ theme }) => theme.colors.shadowLight},
    -13px -13px 20px ${({ theme }) => theme.colors.shadowDark};
`
