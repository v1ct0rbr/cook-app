import { supabase } from "./supabase";

async function findAll() {
    const { data } = await supabase.
        from("ingredients")
        .select()
        .order("name")
        .returns<IngredientResponse[]>();
    return data ?? []
}

async function findById(id: string) {
    const { data } = await supabase.
        from("ingredients")
        .select()
        .eq("id", id).returns<IngredientResponse>();

    return data
}

async function findAllByIds(ids: string[]) {
    const { data } = await supabase.
        from("ingredients")
        .select()
        .in("id", ids)
        .order("name")
        .returns<IngredientResponse[]>();

    return data ?? []
}

async function findRecipeInnerJoinIngredientsByRecipeId(id: string) {
    const { data } = await supabase.
        from("recipes_ingredients")
        .select("recipes (id, name, image, minutes), ingredients (id, name, image)")
        .eq("recipe_id", id).returns<RecipeResponse[]>();

    return data
}

async function findByRecipeId(id: string) {
    const { data } = await supabase.
        from("recipes_ingredients")
        .select("ingredients (id, name, image)")
        .eq("recipe_id", id).returns<IngredientResponse[]>();

    return data
}

export { findAll, findAllByIds, findById };
