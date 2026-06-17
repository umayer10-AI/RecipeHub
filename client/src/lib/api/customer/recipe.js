import { getdata } from "../mutation"

export const myRecipes = async() => {
    return getdata('')
}

export const addRecipes = async(v) => {
    return getdata(v,``)
}