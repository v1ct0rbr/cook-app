import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 0px;
  background-color: ${({ theme }) => theme.colors.white};
`

// export const ContainerRecipe = styled.View`
//   flex: 1;
//   background-color: ${({ theme }) => theme.colors.white};
// `

export const Header = styled.View`
    height: 192px;
`

export const Image = styled.ImageBackground`
  flex: 1;
`

export const RecipeView = styled.View`
  flex: 1;
  height: 200px;
  
  justify-content: flex-end;
  overflow: hidden;
  
`

