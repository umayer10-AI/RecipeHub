import { getdata, mutation } from "../mutation"

export const myRecipes = async() => {
    return getdata(`/api/recipes`)
}

export const addRecipes = async(v) => {
    return mutation(v,`/api/recipes`,`POST`)
}