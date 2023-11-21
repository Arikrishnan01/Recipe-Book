import React from 'react';
import '../Styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { HandleLogOut } from '../ConfigData';


export default function Navbar({search, setSearch, filtered, setFiltered }) {

  const navigate = useNavigate();

  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <div className='navbar-left-title'>
                <h1>Recipe <span>book</span></h1>
            </div>
        </div>
        <div className='navbar-center'>
            <div className='navbar-center-search-con'>
              <input 
                className='navbar-search-box'
                type='input'
                placeholder='search...'
                value={search}
                onChange={(event) => {
                  // console.log(event.target.value)
                  setSearch(event.target.value)
                }}
              />
              <span>
                <FontAwesomeIcon 
                  className='navbar-search-icon' 
                  icon={faSearch}
                  onClick={() => setFiltered(!filtered)} 
                />
              </span>
            </div>
        </div>
        <div className='navbar-right'>
           {
            filtered ? 
           

            <button
              className='navbar-right-signup-btn'
              onClick={() => {
                HandleLogOut();
                window.location.href = "/login";
              }}
            >Logout</button>
             :
             <>
               <button
              className='navbar-right-login-btn'
              onClick={() => navigate("/login")}
              >Login</button>
              <button
                className='navbar-right-signup-btn'
                onClick={() => navigate("/signup")}
              >SignUp</button>
             </>
        }
             
        </div>
    </div>
  )
}
