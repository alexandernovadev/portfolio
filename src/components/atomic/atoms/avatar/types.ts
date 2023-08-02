import { StaticImageData } from 'next/image'

export interface AvatarProps {
  src: string | StaticImageData
  alt?: string
  size?: 'small' | 'medium' | 'large'
  borderColor?: string
  background?: string
}
