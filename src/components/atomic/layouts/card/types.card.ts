export interface CardProps {
  children: JSX.Element | JSX.Element[]
  orientation?: 'column' | 'row' | 'column-inverse'
  className?: string
}

export type CardPropStyle = Pick<CardProps, 'orientation'>
