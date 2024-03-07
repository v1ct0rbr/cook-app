import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Title = styled.Text`
  line-height: 40px;
  margin-top: 42px;

  ${({ theme }) => css`
    font-size: ${theme.fonts.size.heading.xl}px;
    font-family: ${theme.fonts.family.bold};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.regular};
  `}
`

export const Message = styled.Text`
  margin-top: 12px;
  margin-bottom: 38px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.family.regular};
    font-size: ${theme.fonts.size.body.md}px;
    color: ${theme.colors.gray_400};
  `}
`
