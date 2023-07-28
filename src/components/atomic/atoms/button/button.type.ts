export interface ButtonProps {
  children?: JSX.Element | JSX.Element[]
  text: string
  type?: 'default' | 'fill'
  bgColor?: string
}

export type ButtonStyleProps = Pick<ButtonProps, "type" | "bgColor">;