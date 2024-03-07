import CustomIcon from '@/components/CustomIcon'
import { Ingredient } from '@/components/Ingredient'
import { IngredientsScrollView } from '@/components/Ingredients/styles'
import { Recipe } from '@/components/Recipe'
import { services } from '@/services'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Container, Header, RecipesFlatList, Title } from './styles'

export default function Recipes() {
  const [selectedIngredients, setSelectedIngredients] = useState<IngredientResponse[]>([])
  const [recipes, setRecipes] = useState<RecipeResponse[]>([])

  const params = useLocalSearchParams<{ ingredients: string }>()

  const ingredientsIds = params.ingredients.split(',');

  useEffect(() => {
    if (ingredientsIds) {
      services.ingredients.findAllByIds(ingredientsIds).then(setSelectedIngredients).catch(console.error)
    }
  }, [])

  useEffect(() => {
    if (ingredientsIds) {
      services.recipes.findRecipesByIngredients(ingredientsIds).then(setRecipes).catch(console.error)
    }
  }, [])

  function handleNavigateToRecipeDetails(id: string) {
    router.navigate(`/recipe/${id}`)
  }

  return (
    <Container>
      <Header>
        <CustomIcon name='arrow-back' size={33} onPress={() => router.back()} />

        <Title>Ingredientes</Title>
        <IngredientsScrollView horizontal>
          {selectedIngredients.map((item) => (
            <Ingredient
              key={item.id}
              image={{ uri: `${services.storage.imagePath('ingredients')}/${item.image}` }}
              name={item.name}
            />
          ))}
        </IngredientsScrollView>

      </Header>

      <RecipesFlatList data={recipes} keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<Recipe recipe={{ name: item.name, image: item.image, minutes: item.minutes }} onPress={() => handleNavigateToRecipeDetails(item.id)} />)} ListEmptyComponent={() =>
          <Title>Nenhuma receita encontrada</Title>
        } />
    </Container>
  )
}
