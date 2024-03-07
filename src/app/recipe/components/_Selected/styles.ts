import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'


export const Header = styled.View`
  justify-content: space-between;
  
  margin-bottom: 60px;
`

export const ContainerAnimated = styled(Animated.View)`
  padding: 24px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.lg}px;
  `}
  position: absolute;
  top: 180px;
  width: 100%;
  
  align-self: center;
  z-index: 10000;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.heading.md}px;
    font-family: ${theme.fonts.family.bold};
  `};
  width: 100%;
  margin-top: 16px;
  margin-bottom:0px;
`
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    
    font-size: ${theme.fonts.size.heading.xs}px;
    font-family: ${theme.fonts.family.bold};
  `};
  margin-bottom: 16px;
`
export const StepContainerView = styled.View`
  flex: 1;
  height: 350px;
  
  

`


export const StepRow = styled.View`
  flex-direction: row;
  overflow: visible;
  word-wrap: break-word;
  align-items: center;
  
`

export const StepNumber = styled.Text`
  ${({ theme }) => css`
    
    font-size: ${theme.fonts.size.body.sm}px;
    font-family: ${theme.fonts.family.bold};
  `}
  margin-right: 16px;
`
export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.body.xs}px;
    font-family: ${theme.fonts.family.regular};
    color: ${theme.colors.gray_400};
  `}
  padding-right: 50px;
  
`




export const ButtonSearch = styled.Button.attrs(({ theme }) => ({
  color: theme.colors.green_600,
}))``
