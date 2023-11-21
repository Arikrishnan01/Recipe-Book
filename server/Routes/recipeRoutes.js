import express from 'express';
import { verifyToken } from '../Middleware/authJWT.js';
import { createRecipe, 
    deleteRecipeById, 
    getAllRecipe, 
    getById,   
    getTotalRecipe,   
    updateRecipeById 
} from '../Controllers/recipeController.js';

const router = express.Router();

router.get('/getTotalRecipe', getTotalRecipe)
router.post('/create',[verifyToken], createRecipe);
router.get("/getAllRecipe",[verifyToken], getAllRecipe);
router.get("/:id", getById);
router.put("/:id", updateRecipeById);
router.delete("/:id", deleteRecipeById);


/** export the sub router */
const recipeRouters = router;
export default recipeRouters;