import { TouchableOpacityProps } from 'react-native'

import { Container, Image, Linear, Minutes, RecipeView, Title } from './styles'

type Props = TouchableOpacityProps & {
  recipe: {
    name: string
    image: string
    minutes: number
  },
  isGradient?: boolean
}

export function Recipe({ recipe, isGradient = true, ...rest }: Props) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <Image source={{ uri: recipe.image }} alt="receita">
        {isGradient ?
          <Linear colors={['rgba(0, 0, 0, 0.1)', '#000']}>
            <Title numberOfLines={1} lineBreakMode="tail">
              {recipe.name}
            </Title>
            <Minutes numberOfLines={1} lineBreakMode="tail">
              {recipe.minutes} minutos
            </Minutes>
          </Linear>
          :
          <RecipeView>
            <Title numberOfLines={1} lineBreakMode="tail">
              {recipe.name}
            </Title>
            <Minutes numberOfLines={1} lineBreakMode="tail">
              {recipe.minutes} minutos
            </Minutes>
          </RecipeView>
        }

      </Image>
    </Container>
  )
}
