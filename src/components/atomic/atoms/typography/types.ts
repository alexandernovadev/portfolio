import { HTMLAttributes } from 'react'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'small'
  | 'label'
  | 'blockquote'
  | 'pre'

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: TypographyVariant
}
