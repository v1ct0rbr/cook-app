/* eslint-desable  @typescript-eslint/no-unused-vars */
import React from 'react'
import { ImageSourcePropType, PressableProps } from 'react-native'
import { Container, IngredientImage, IngredientTitle } from './styles'

export type IngredientsProps = {
  name?: string
  selected?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: ImageSourcePropType
}

export function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientsProps & PressableProps) {
  return (
    <Container selected={selected} {...rest}>
      <IngredientImage source={image} alt="teste" />
      <IngredientTitle>{name}</IngredientTitle>
    </Container>
  )
}
