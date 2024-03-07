import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'
import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex: 1;
  height: 192px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  overflow: hidden;
`
export const Image = styled.ImageBackground`
  flex: 1;
`

interface LinearProps extends LinearGradientProps {
  isGradient?: boolean
}

export const RecipeView = styled.View`
  flex: 1;
  padding: 12px;
  justify-content: flex-end;
`
// 
export const Linear = styled(LinearGradient)`
  flex: 1;
  padding: 12px;
  justify-content: flex-end;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.body.sm}px;
    font-family: ${theme.fonts.family.bold};
  `}
`
export const Minutes = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.yellow_500};
    font-size: ${theme.fonts.size.body.xs}px;
    font-family: ${theme.fonts.family.regular};
  `}
`
