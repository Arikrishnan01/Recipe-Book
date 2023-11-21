import React from 'react'
import '../Styles/Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className='home-container'>
        <div className='home-app-dis'>
            <h1 className='home-app-dis-h1'>APP DESCRIPTION</h1>
            <h3 className='home-app-dis-h3'>
              Here we can all the recipes from db.
              Click the recipe button it will redirect the recipe page.
              If you want add new recipe you can do. But
              before that you have to signup.
            </h3>
        </div>
        <div className='home-app-dis-con'>
            <div className='home-app-dis-con-item1'>
                <h3 className='home-app-dis-con-item1-h3'>"Unlock Culinary Delights with Our Recipes"</h3>
                <p className='home-app-dis-con-item1-p'>
                  Explore a collection of mouthwatering recipes that cater to every palate.
                  Click the 'Recipes' button and start your flavorful journey!!!
                </p>
                <button
                  className='home-app-dis-con-item1-btn'
                  onClick={() => navigate("/recipe")}
                >Recipes</button>
            </div>
            <div className='home-app-dis-con-item2'>
                <h3 className='home-app-dis-con-item2-h3'>"Join Us and Share Your Culinary Masterpieces"</h3>
                <p className='home-app-dis-con-item2-p'>
                  Sign up to unlock the power of creating and sharing your own delightful recipes.
                  Your culinary adventure starts here!!!
                </p>
                <button
                  className='home-app-dis-con-item2-btn'
                  onClick={() => navigate("/signup")}
                >SignUp</button>
            </div>
        </div>
    </div>
  )
}
