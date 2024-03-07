import { ScrollView, ScrollViewProps } from 'react-native'
import styled from 'styled-components/native'

export const IngredientsScrollView = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 12,
  },
  showsHorizontalScrollIndicator: false, // Add this line to hide the vertical scroll bar
}) <ScrollViewProps>``



export const IngredientImage = styled.Image``

export const IngredientName = styled.Text``
