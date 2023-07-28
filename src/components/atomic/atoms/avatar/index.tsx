import styled, { css } from 'styled-components'

interface AvatarProps {
  src: string
  alt?: string
  size?: 'small' | 'medium' | 'large'
  border?: boolean
  borderColor?: string
}

const sizeMap = {
  small: '40px',
  medium: '60px',
  large: '80px',
}

const AvatarImage = styled.img<Partial<AvatarProps>>`
  width: ${({ size }) => (size ? sizeMap[size] : sizeMap['medium'])};
  height: ${({ size }) => (size ? sizeMap[size] : sizeMap['medium'])};
  border-radius: 50%;
  object-fit: cover;

  background: ${({ theme }) => theme.colors.highlight};
  box-shadow: inset 4px 4px 5px ${({ theme }) => theme.colors.shadowLight},
    inset -4px -4px 5px ${({ theme }) => theme.colors.shadowDark};
  transform: scale(1.08);

  &:hover {
    transform: scale(1.098);
  }

  ${({ border, borderColor }) =>
    border &&
    css`
      border: 2px solid ${borderColor || '#fff'};
    `};
`

const Avatar = ({ src, alt, size, border, borderColor }: AvatarProps) => {
  return (
    <AvatarImage
      src={src}
      alt={alt}
      size={size}
      border={border}
      borderColor={borderColor}
    />
  )
}

export default Avatar
