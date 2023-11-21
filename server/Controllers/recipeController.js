// import ToDoModel from "../Models/toDoModel.js";

import RecipeModel from "../Models/recipeModel.js";

/** create new todo */
export const createRecipe = async(req, res) => {
    try{
        const { title, recipeImage,
            recipeVideo, ingredients, instructions } = req.body;
        const userId = req.userId;

        /** create new todo  */
        const newRecipe = new RecipeModel({
            userId,
            title,
            recipeImage,
            recipeVideo,
            ingredients,
            instructions
        })
        await newRecipe.save()
            return res.status(200).json({
                message: "Recipe created succussfully...",
                data: newRecipe 
            });
    }
    catch(error){
        return res.status(500).json({
            message: "Internal Server Error!!!",
            error: error.message
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /getAllFunction
 */
export const getAllRecipe = async(req, res)=>{
    try{
        const userId = req.userId;
        //Chech the user is 
        if(!userId){
            return res.status(400).json({
                message: "Unautharaized!!!",
            });
        }
        //get all the data over here
        const getAllData = await RecipeModel.find({ userId });
        if(getAllData){
            return res.status(200).json({
                message: "Atlas data fetched successfuly!!!",
                data: getAllData
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas couldn't fetch the data"
            });
        }

    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!!",
            error: error.message
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /getById
 */
export const getById = async(req, res) => {
    try{
        const { id } =  req.params;
        const databyId = await RecipeModel.findById(id);

        if(databyId){
            return res.status(200).json({
                message: "Atlas data fetched successfully!!",
                data: databyId
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas could not fetch the data!!!",
            });
        }

    }
    catch(error){
        return res.status(500).json({
            message: "Intenal server error!!",
            error: error
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: PUT
 * PATH: /updateToDoById
 */
export const updateRecipeById = async(req, res) => {
    try{
        const { id } = req.params;
        const updateById = await RecipeModel.findByIdAndUpdate(id, req.body, { new: true});
        if(updateById){
            return res.status(200).json({
                message: "Atlas, Data updated successfully!!!",
                data: updateById
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas, couldn't fetch the data!!!!",
            });
        }

    }
    catch(error){
        return res.status(500).json({
            message: "Internal server error!!",
            error: error.message
        });
    }
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: DELETE
 * PATH: /deleteToDoById
 */
export const deleteRecipeById  = async(req, res) => {
    try{
        const { id } = req.params;
        const deleteById = await RecipeModel.findByIdAndDelete(id); 
        if(deleteById){
            return res.status(200).json({
                message: "Atlas, data deleted successfully!!",
                data: deleteById
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!",
            error: error.message
        });
    }
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /getAllFunction
 */
export const getTotalRecipe = async(req, res)=>{
    try{
        
        const getTotalData = await RecipeModel.find();
        // console.log(getTotalData)
        if(getTotalData){
            return res.status(200).json({
                message: "Atlas data fetched successfuly!!!",
                data: getTotalData
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas couldn't fetch the data"
            });
        }

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            message: "Internal server Error!!!",
            error: error.message
        });
    }
}
