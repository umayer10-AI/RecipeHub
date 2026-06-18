"use client"
import { saveRecipeData } from '@/lib/api/customer/recipe';
import { error } from 'better-auth/api';
import { Bookmark } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

const SaveRecipe = ({recipe}) => {

    console.log(recipe)
    const {
        _id,
        recipeName,
        image,
        category,
        cuisineType,
        difficultyLevel,
        preparationTime,
        ingredients,
        instructions,
        like,
        userId,
        userName,
        createdAt,
    } = recipe;

    const data = {
        recipeName,
        image,
        category,
        cuisineType,
        difficultyLevel,
        preparationTime,
        ingredients,
        instructions,
        like,
        userId,
        userName,
        createdAt,
        saveId: _id,
    }

    const handleData = async () => {
        // console.log(data)
        const saveData = await saveRecipeData(data)
        // console.log(saveData)
        if(saveData.insertedId){
            toast.success('Save Data')
        }
        else{
            toast.error('Already Saved Data')
        }
    }

    return (
        <div>
            <button onClick={handleData} className="flex items-center cursor-pointer gap-1.5 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-sm font-medium">
              <Bookmark size={16} />
              Save
            </button>
        </div>
    );
};

export default SaveRecipe;