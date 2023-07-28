import React from 'react'
import { AnchorProps } from './types'
import { AnchorStyled } from './styles'

const Anchor = ({ href, variant = 'default', children }: AnchorProps) => {
  return (
    <AnchorStyled href={href} variant={variant}>
      {children}
    </AnchorStyled>
  )
}

export default Anchor
