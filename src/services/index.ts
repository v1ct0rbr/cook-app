import * as ingredients from './ingredientesServices'
import * as preparations from './preparationServices'
import * as recipes from './recipeServices'

export const services = {
    ingredients, recipes, preparations, storage: {
        imagePath: (path: string) => `${process.env.EXPO_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${path}`
    }
}