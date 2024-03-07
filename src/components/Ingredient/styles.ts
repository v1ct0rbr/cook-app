import styled, { css } from 'styled-components/native'

interface ContainerProps {
  selected?: boolean
}

export const Container = styled.Pressable<ContainerProps>`
  border-width: 2px;
  padding-left: 16px;
  padding-right: 16px;

  ${({ theme, selected }) => css`
    border-radius: ${theme.borderRadius.full}px;
    border-width: 2px;
    border-color: ${selected ? theme.colors.green_600 : theme.colors.gray_200};
    background-color: ${selected
      ? theme.colors.green_100
      : theme.colors.gray_200};
  `}
  height: 42px;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`

export const IngredientImage = styled.Image`
  width: 20px;
  height: 20px;
`
export const IngredientTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.body.xs}px;
    font-family: ${theme.fonts.family.regular};
  `}
`
