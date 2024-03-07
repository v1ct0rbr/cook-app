import { useLocalSearchParams } from "expo-router";

import { LoadingIndicator } from "@/components/LoadingIndicator";
import { services } from "@/services";
import { useEffect, useState } from "react";
import { Selected } from "./components/_Selected";
import { Container, Header, Image, RecipeView } from "./styles";


export default function RecipeDetails() {

    const params = useLocalSearchParams<{ id: string }>()
    const [selectedRecipe, setSelectedRecipe] = useState<RecipeResponse>({} as RecipeResponse); // Update initial state value
    const [preparations, setPreparations] = useState<PreparationResponse[]>([]);

    const selectedRecipeId = params.id;



    useEffect(() => {
        selectedRecipeId &&
            services.preparations.findByRecipeId(selectedRecipeId).then(setPreparations).catch(console.error)

    }, [])
    useEffect(() => {
        selectedRecipeId &&
            services.recipes.findById(selectedRecipeId).then(setSelectedRecipe).catch(console.error)



    }, [])

    return (
        selectedRecipe.id ? (
            <Container style={{ padding: 16 }}>
                <Header>
                    <RecipeView>
                        <Image source={{ uri: selectedRecipe.image }} alt="receita">
                            <RecipeView >
                            </RecipeView>
                        </Image>
                    </RecipeView>
                </Header>
                <Selected recipe={selectedRecipe} preparations={preparations} />

            </Container>
        ) : (<LoadingIndicator />)
    )
}