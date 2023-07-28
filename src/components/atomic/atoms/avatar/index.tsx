import { AvatarStyled } from './styles'
import { AvatarProps } from './types'

const Avatar = ({ src, alt, size, borderColor }: AvatarProps) => {
  return (
    <AvatarStyled
      src={src}
      alt={alt}
      size={size}
      borderColor={borderColor}
    />
  )
}

export default Avatar
