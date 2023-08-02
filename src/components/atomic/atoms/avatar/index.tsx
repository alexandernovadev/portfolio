import { AvatarStyled } from './styles'
import { AvatarProps } from './types'

const Avatar = ({ src, alt, size, borderColor, background }: AvatarProps) => {
  return (
    <AvatarStyled
      src={src}
      alt={alt}
      size={size}
      borderColor={borderColor}
      background={background}
    />
  )
}

export default Avatar
