import React, { useEffect, useState } from 'react';
import '../Styles/EditRecipe.css';
import { useNavigate, useParams } from 'react-router-dom';
import { GLOBAL_URL } from '../ConfigData';
import { Tooltip, useToast } from '@chakra-ui/react';

let initialObject = {
    title: "",
    description: "",
    dueDate: ""
  };
export default function EditRecipe() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formState, setForm] = useState(initialObject);
    const [loading, setLoading] = useState(false);
    const toast = useToast();
  
    const inputHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setForm({ ...formState, [name]: value });
    };

     //getById for update
  const getById = () => {
    fetch(`${GLOBAL_URL}/recipe/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((byId) => {
        setForm(byId.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    getById();
  }, []);

  //update the existing data
  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const updateById = {
      title: formState.title,
      recipeImage: formState.recipeImage,
      recipeVideo: formState.recipeVideo,
      ingredients: formState.ingredients,
      instructions: formState.instructions,
    };

    fetch(`${GLOBAL_URL}/recipe/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateById),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log(data)
        toast({
          title: "Recipe updated successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-end",
      });
        // Handle the response data in your front-end code
        navigate("/my-recipe");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
      });
  }

  return (
    <div className='measl-containers'>
    <div className="topBackContaier">
        <h3 className="topTitle">EDIT EXIST RECIPES</h3>
    </div>
    <div className="meals-Form">
        <div className='meals-itemss'>
        <label>Recipe Title</label>
        <input
            name='title' 
            type='text'
            className="mealsInputField"
            placeholder='Enter the recipe title'
            value={formState.title}
            onChange={inputHandler}
        />
        </div>
        <div className='meals-itemss'>
        <label>Recipe Image</label>
        <Tooltip hasArrow label='give url for recipe img' bg='orange'>
            <input
                name='recipeImage'
                type='text' 
                className="mealsInputField"
                placeholder='Enter the meals name'
                value={formState.recipeImage}
                onChange={inputHandler}
            />
        </Tooltip>
        </div>

        <div className='meals-itemss'>
        <label>Recipe Video</label>
        <Tooltip hasArrow label='give url for recipe vedio' bg='orange'>
            <input
                name='recipeVideo'
                type='text' 
                className="mealsInputField"
                placeholder='Enter the meals vedio url'
                value={formState.recipeVideo}
                onChange={inputHandler}
            />
        </Tooltip>
        </div>

        <div className='meals-itemss'>
        <label>Ingredients</label>
        <input
            name='ingredients'
            type='text' 
            className="mealsInputField"
            placeholder='Enter the meals vedio url'
            value={formState.ingredients}
            onChange={inputHandler}
        />
        </div>
        <div className='meals-itemss'>
        <label>Instructions</label>
        <input
            name='instructions'
            type='text' 
            className="mealsInputField"
            placeholder='Enter the meals vedio url'
            value={formState.instructions}
            onChange={inputHandler}
        />
        </div>

        <button 
            className="addMealsButtonBottom"
            onClick={submitHandler}
            isLoading={loading}          
        >Edit Recipe</button>
    </div>

</div>
  )
}