// import { CustomIcon } from '@/components/CustomIcon'
import { router } from 'expo-router'
import { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import { useTheme } from 'styled-components/native'

import CustomIcon from '@/components/CustomIcon'
import { FlatList } from 'react-native'
import { ContainerAnimated, Description, Header, StepContainerView, StepNumber, StepRow, SubTitle, Title } from './styles'

type SelectedProps = {
  recipe: RecipeResponse;
  preparations: PreparationResponse[];
}

export function Selected({ recipe, preparations }: SelectedProps) {
  const theme = useTheme()

  return (
    <ContainerAnimated exiting={SlideOutDown} entering={SlideInDown.duration(500)} >
      <Header>
        <CustomIcon
          name="arrow-back"
          size={24}
          onPress={() => { router.back() }}
          color={theme.colors.gray_400}
        ></CustomIcon>

        <Title>{recipe.name}</Title>
        <Description>{recipe.minutes} minutos de preparo </Description>



      </Header>

      <SubTitle>Modo de preparo</SubTitle>

      <StepContainerView>

        <FlatList showsVerticalScrollIndicator data={preparations} keyExtractor={(item) => item.id} renderItem={({ item }) => (
          <StepRow>
            <StepNumber>{item.step}</StepNumber>
            <Description>{item.description}</Description>
          </StepRow>
        )} />


      </StepContainerView>

    </ContainerAnimated>
  )
}
