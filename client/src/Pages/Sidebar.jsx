import React from 'react';
import '../Styles/Sidebar.css';
import { Link } from 'react-router-dom'; 
// import { AiOutlineHome } from '@chakra-ui/react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons'; 
import { faCoffee   } from '@fortawesome/free-solid-svg-icons';           

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
       <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to='/' className="link">
                <li className="sidebarListItem active">
                    {/* <AiOutlineHome className='sidebarIcon'/> */}
                    <FontAwesomeIcon className='sidebarIcon' icon={faHome} />
                    Home
                </li>
                </Link>
                <Link to="/recipe" className="link">
                <li className="sidebarListItem">
                    {/* <CalendarMonthIcon className='sidebarIcon'/> */}
                    <FontAwesomeIcon className='sidebarIcon' icon={faUtensils} />
                    Recipes
                </li>
                </Link>
                <Link to="/my-recipe" className="link">
                <li className="sidebarListItem">
                    {/* <CalculateIcon className='sidebarIcon'/> */}
                    <FontAwesomeIcon className='sidebarIcon' icon={faCoffee  } />
                    My Recipes
                </li>
                </Link>
              </ul>
          </div>
    </div>
  )
}