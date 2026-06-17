import { myRecipes } from '@/lib/api/customer/recipe';
import React from 'react';

const page = async () => {

    const data = await myRecipes()
    console.log(data)

    return (
        <div>
            my recipe
        </div>
    );
};


















export default page;