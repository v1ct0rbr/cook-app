import { Ingredient } from '@/components/Ingredient'
import { IngredientsScrollView } from '@/components/Ingredients/styles'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { Container, Message, Subtitle, Title } from './styles'

import { Selected } from '@/components/Selected'
import { router } from 'expo-router'

import { services } from "@/services"
export default function Index() {
  const [selected, setSelected] = useState<string[]>([])
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])


  useEffect(() => {
    services.ingredients.findAll().then(setIngredients).catch(console.error)

  }, [])

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      
      return setSelected((state) => state.filter((item) => item !== value))
    }
    setSelected((state) => [...state, value])
    
  }

  function handleClearSelected() {
    Alert.alert('Atenção', 'Deseja limpar a seleção?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => setSelected([]),
      },
    ])
  }

  function handleSearch() {
    
    router.navigate(`/recipes/${selected}`)
  }

  return (
    <Container>
      <Title>
        Escolha {'\n'}
        <Subtitle>os produtos</Subtitle>
      </Title>
      <Message>
        Descubra recietar baseadas nos produtos que você escolheu.
      </Message>
      <IngredientsScrollView showsVerticalScrollIndicator={false}>
        {ingredients.map((item, index) => (
          <Ingredient
            key={item.id}
            image={{uri: `${services.storage.imagePath('ingredients')}/${item.image}` }}
            name={item.name}
            selected={selected.includes(item.id)}
            onPress={() => handleToggleSelected(item.id)}
          />
        ))}
      </IngredientsScrollView>

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </Container>
  )
}
