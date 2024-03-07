import { supabase } from "./supabase";

async function findAll() {
    const { data } = await supabase.
        from("preparations")
        .select()
        .order("step")
        .returns<PreparationResponse[]>();
    return data ?? []
}

async function findByRecipeId(id: string) {
    const { data } = await supabase.
        from("preparations")
        .select().order("step")
        .eq("recipe_id", id).returns<PreparationResponse[]>();

    return data ?? []
}

export { findAll, findByRecipeId };
