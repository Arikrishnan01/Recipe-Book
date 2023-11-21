import React, { useEffect, useState } from 'react';
import {  getTotalRecipe } from '../ConfigData';
import '../Styles/Recipe.css';
import Counter from './Counter';


export default function Recipe({ search }) {

    const [userData, setUserData ] = useState([]);

    const fetchAllData = async() => {
      const response = await getTotalRecipe();
      console.log(response.data)
      setUserData(response.data.data);
  }

  useEffect(() => {
    fetchAllData();
},[]);

  return (
    <div className='recipe-container'>
      <div className='recipe-add-container'>
        <h1 className='recipe-container-title'>Recipe Collection</h1>
      </div>
      <div className='recipe-map-con'>
          {
            userData &&
            userData.map(row => {
              if(row.title.toLowerCase().includes(search.toLowerCase())){
                  
              return(
              <div className='recipe-map-con-item' key={row.id}>
                  <img src={row.recipeImage}/>
                  <h2 className='recipe-map-con-title'>{row.title}</h2>
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

{/* <div className='recipe-comment-con'>
                    <input 
                      className='recipe-comment-input-box'
                      placeholder='comments...'
                      value={addComment}
                    onChange={(e) => setAddComment(e.target.value)}
                    />
                     <button className='recipe-comment-comSendBtn' 
                      onClick={commentHandler}
                      isLoading={loading}
                     >
                      <FontAwesomeIcon 
                        className='recipe-comment-comSend'
                        icon={faPaperPlane} 
                        />
                     </button>
                    <button className='recipe-comment-comIconBtn' 
                      onClick={() => setShow(!show)}
                    >
                      {
                        comments &&
                        comments.map((com) => (
                          <div>
                            
                            {show ? <FontAwesomeIcon
                              className='recipe-comment-comIcon' 
                              icon={faComment} 
                            /> : <FontAwesomeIcon
                            className='recipe-comment-comIcon' 
                            icon={faComment} 
                          />}
                            {/* <p>{com.comment}</p> 
                            {show ? <p className="book-summary">{com.comment}</p> : null}
                          </div>
                        ))
                      }
                      
                    </button>
                    
                  </div> */}
