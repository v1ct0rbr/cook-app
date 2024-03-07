import { FlatList, FlatListProps } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  padding-left: 32px;
  padding-right: 32px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`
export const Header = styled.View`
 
  padding-top: 32px;
  margin-bottom: 12px;
`
export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.size.heading.md}px;
        font-family: ${theme.fonts.family.bold};        
    ` };
    margin-top: 16px;
    margin-bottom: 16px;
`
export const RecipesFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingBottom: 20,
    gap: 20
  },
  showsVerticalScrollIndicator: false,
  columnWrapperStyle: { gap: 20 },
  numColumns: 2
}) <FlatListProps<RecipeResponse>>``
