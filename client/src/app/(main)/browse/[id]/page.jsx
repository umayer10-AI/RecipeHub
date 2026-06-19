import RecipeDetails from '@/component/RecipeDetails';
import { singleRecipes, singleSavedRecipes } from '@/lib/api/customer/recipe';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await singleRecipes(id)
    const save = await singleSavedRecipes(data?.userId)
    const filter1 = save.find(v => v.saveId === data?._id)
    const filter2 = save.find(v => v.userId === data?.userId)
    console.log(data)

    return (
        <div>
            <RecipeDetails recipe={data} filter1={filter1} filter2={filter2}></RecipeDetails>
        </div>
    );
};

export default page;