import { allRecipes } from '@/lib/api/customer/recipe';
import React from 'react';
import RecipeCards from './RecipeCards';
import Searching from './Serching';

const Browse = async ({search, category}) => {

    const data = await allRecipes(search, category);

    return (
        <div className='max-w-[80%] mx-auto'>
            <h2 className='text-3xl font-bold my-10 text-center'>Browse Page</h2>
            <Searching s={search} c={category}></Searching>
            <RecipeCards recipes={data}></RecipeCards>
        </div>
    );
};

export default Browse;