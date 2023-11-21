import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/SignUp';
import Home from './Pages/Home';
import Recipe from './Pages/Recipe';
import MyRecipe from './Pages/MyRecipe';
import Navbar from './Pages/Navbar';
import Sidebar from './Pages/Sidebar';
import AddRecipe from './Pages/AddRecipe';
import EditRecipe from './Pages/EditRecipe';
import { useState } from 'react';

function App() {

  const [search, setSearch ] =useState('');
  const [filtered, setFiltered ] =useState(false);

  return (
    <div className="App">
      <Navbar 
        search={search}
        setSearch={setSearch}
        filtered={filtered}
        setFiltered={setFiltered}
      />
          <div className='app-container'>
            <Sidebar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login 
              filtered={filtered}
              setFiltered={setFiltered}
            />} />
            <Route path='/' element={<Home /> }/>
            <Route path='/recipe' element={<Recipe 
              search={search}
              setSearch={setSearch}
              filtered={filtered}
              setFiltered={setFiltered}
            /> }/>
            <Route path='/my-recipe' element={<MyRecipe 
              search={search}
              setSearch={setSearch}
              filtered={filtered}
              setFiltered={setFiltered}
            /> }/>
            <Route path='/add-recipe' element={<AddRecipe /> }/>
            <Route path='/recipe/:id' element={<EditRecipe /> }/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
