import styled, { css } from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.green_600};
    border-radius: ${theme.borderRadius.sm}px;
  `}
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.body.sm}px;
    font-family: ${theme.fonts.family.medium};
  `}
`
