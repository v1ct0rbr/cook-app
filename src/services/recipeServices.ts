import { supabase } from "./supabase";

async function findAllByPage(page: number) {
    const { data } = await supabase
        .from("recipes")
        .select()
        .order("name")
        .range(page * 10, (page + 1) * 10 - 1)
        .returns<RecipeResponse[]>();
    return data ?? [];
}

async function findRecipesByIngredients(ingredientsIds: string[]) {
    const { data } = await supabase
        .rpc('get_recipes_by_ingredients', { ingredient_ids: ingredientsIds })
        .returns<RecipeResponse[]>();
    return data ?? [];
}

async function findById(id: string) {

    const { data } = await supabase.
        from("recipes")
        .select().eq("id", id).single();

    return data ?? ({} as RecipeResponse)
}

export { findAllByPage, findById, findRecipesByIngredients };

