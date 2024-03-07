type IngredientResponse = {
    id: string
    name: string
    image: string
}

type RecipeResponse = {
    id: string
    name: string
    image: string
    minutes: number
}

type PreparationResponse = {
    id: string
    description: string
    step: number
}