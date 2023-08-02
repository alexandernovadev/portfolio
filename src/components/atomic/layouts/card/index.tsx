import React from 'react'
import { CardStyled } from './style.card'
import { CardProps } from './types.card'

const index = ({
  children,
  orientation = 'row',
  className = '',
}: CardProps) => {
  return (
    <CardStyled orientation={orientation} className={className}>
      {children}
    </CardStyled>
  )
}

export default index
