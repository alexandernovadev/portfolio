import { sizeMap } from './styles'

export type SizeType = keyof typeof sizeMap

export interface ImageIconProps {
  size?: SizeType
  src?: any
  title?: string | 'Tech'
}
