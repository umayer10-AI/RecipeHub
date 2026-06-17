import { getdata, mutation } from "../mutation"

export const myRecipes = async() => {
    return getdata('')
}

export const addRecipes = async(v) => {
    return mutation(v,`/api/recipes`,`POST`)
}