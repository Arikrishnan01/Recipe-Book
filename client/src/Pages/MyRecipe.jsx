import React, { useEffect, useState } from 'react';
import {  getAllRecipe, GLOBAL_URL } from '../ConfigData';
import '../Styles/Recipe.css';
import Counter from './Counter';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useToast } from '@chakra-ui/react';


export default function MyRecipe({ search, setSearch, filtered, setFiltered }) {

    const [userData, setUserData ] = useState([]);
    const navigate = useNavigate();
    const toast = useToast();

    const fetchAllData = async() => {
      const response = await getAllRecipe({search});
      console.log(response.data)
      setUserData(response.data.data);
  }

  
  useEffect(() => {
    fetchAllData();
},[]);

  return (
    <div className='recipe-container'>
      <div className='recipe-add-container'>
        <h1 className='recipe-container-title'>MyRecipe Collection</h1>
        <button
          className='add-recipe-btn'
          onClick={() => navigate('/add-recipe')}
        >Add Recipe</button>
      </div>
      <div className='recipe-map-con'>
          {
            userData &&
            userData.map(row => {
              console.log(search)
              if(row.title.toLowerCase().includes(search.toLowerCase())){
                  
              return(
                <div className='recipe-map-con-item' key={row.id}>
                  <img src={row.recipeImage}/>
                  <div className='edit-del-con'>
                    <h2 className='recipe-map-con-title'>{row.title}</h2>
                    <button 
                      className='editPen-icon'
                      onClick={() => navigate(`/recipe/${row._id}`)} 
                    >
                    <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button 
                      className='delPen-icon'
                      onClick={()=> {
                        fetch(`${GLOBAL_URL}/recipe/${row._id}`,{
                          method: "DELETE",
                        })
                        .then(toast({
                            title: "Recipe deleted successful",
                            status: "error",
                            duration: 5000,
                            isClosable: true,
                            position: "top-end",
                        }))
                        .then(() => fetchAllData())
                        navigate('/my-recipe')
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                  <h3 className='recipe-map-con-ingre'>👉🏻 {row.ingredients}</h3>
                  <h3 className='recipe-map-con-instruc'>👉🏻 {row.instructions}</h3>
                  <button 
                    className='recipe-watch-button'
                    onClick={() => window.open(`${row.recipeVideo}`)}
                  >Watch Video 
                  </button>
                  <Counter />
              </div>
              )
              }
            })

          }
          
      </div>
    </div>
  )
}

