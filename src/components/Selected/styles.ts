import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'

export const Container = styled(Animated.View)`
  padding: 24px;

  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    border-radius: ${theme.borderRadius.lg}px;
  `}
  position: absolute;
  bottom: 24px;
  width: 100%;
  align-self: center;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 34px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.body.sm}px;
    font-family: ${theme.fonts.family.regular};
  `}
`
export const ButtonSearch = styled.Button.attrs(({ theme }) => ({
  color: theme.colors.green_600,
}))``
