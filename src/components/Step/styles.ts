import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 22px;
`

export const StepTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.body.sm}px;
    font-family: ${theme.fonts.family.bold};
    color: ${theme.colors.black};
  `}
`

export const StepDescription = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.fonts.size.body.sm}px;
    font-family: ${theme.fonts.family.regular};
    color: ${theme.colors.gray_400};
  `}
`
