import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../Styles/AddRecipe.css';
import { createNewRecipe } from '../ConfigData';
import { Tooltip, useToast } from '@chakra-ui/react';

export default function AddRecipe() {

    // const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const [title, setTitle ] = useState("");
    const [recipeImage, setRecipeImage ] = useState("");
    const [recipeVideo, setRecipeVideo] = useState("");
    const [ingredients, setIngredients ] = useState("");
    const [instructions, setInstructions ] = useState("");

    const submitHandler = async(e) => {
        e.preventDefault();
        try{
            const formData = {
                title,
                recipeImage,
                recipeVideo,
                ingredients,
                instructions
            }
            setLoading(true);
            const response = await createNewRecipe(formData);
            
            console.log(response);
            toast({
                title: "Recipe created successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top-end",
            });
            setTitle("");
            setRecipeImage("");
            setRecipeVideo("");
            setIngredients("");
            setInstructions("");
            setLoading(false);
            window.location.href='/my-recipe'
        }
        catch(error){
            toast({
                title: "Error Occured!!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-end",
            });
            setLoading(false)
        }
    }

  return (
    <div className='measl-containers'>
        <div className="topBackContaier">
            <h3 className="topTitle">ADD NEW RECIPES</h3>
        </div>
        <div className="meals-Form">
            <div className='meals-itemss'>
            <label>Recipe Title</label>
            <input 
                type='text'
                className="mealsInputField"
                placeholder='Enter the recipe title'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            </div>
            <div className='meals-itemss'>
            <label>Recipe Image</label>
            <Tooltip hasArrow label='give url for recipe img' bg='orange'>
                <input
                    type='text' 
                    className="mealsInputField"
                    placeholder='Enter the meals name'
                    value={recipeImage}
                    onChange={(event) => setRecipeImage(event.target.value)}
                />
            </Tooltip>
            </div>

            <div className='meals-itemss'>
            <label>Recipe Video</label>
            <Tooltip hasArrow label='give url for recipe vedio' bg='orange'>
                <input
                    type='text' 
                    className="mealsInputField"
                    placeholder='Enter the meals vedio url'
                    value={recipeVideo}
                    onChange={(event) => setRecipeVideo(event.target.value)}
                />
            </Tooltip>
            </div>

            <div className='meals-itemss'>
            <label>Ingredients</label>
            <input
                type='text' 
                className="mealsInputField"
                placeholder='Enter the meals vedio url'
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
            />
            </div>
            <div className='meals-itemss'>
            <label>Instructions</label>
            <input
                type='text' 
                className="mealsInputField"
                placeholder='Enter the meals vedio url'
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
            />
            </div>

            <button 
                className="addMealsButtonBottom"
                onClick={submitHandler}
                isLoading={loading}          
            >Create Recipe</button>
        </div>

</div>
  )
}
