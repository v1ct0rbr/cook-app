import { TouchableOpacityProps } from 'react-native'

import { ButtonContainer, ButtonText } from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonContainer activeOpacity={0.7} {...rest}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}
