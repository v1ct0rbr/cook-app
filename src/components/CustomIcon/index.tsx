import { MaterialIcons } from '@expo/vector-icons'
import { PressableProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Icon } from './styles'

export interface IconProps extends PressableProps {
  name: keyof typeof MaterialIcons.glyphMap
  size: number
  color?: string
}
export default function CustomIcon({ name, size, color, ...rest }: IconProps) {
  const theme = useTheme();
  const defaultColor = color || theme.colors.gray_400;

  return <Icon name={name} size={size} color={defaultColor} {...rest} />
}
