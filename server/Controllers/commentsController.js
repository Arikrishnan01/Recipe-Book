import CommentsModel from "../Models/commentsModel.js";

/** create new todo */
export const createComments = async(req, res) => {
    try{
        const { comment } = req.body;

        /** create new todo  */
        const newComments = new CommentsModel({
            comment
        })
        await newComments.save()
            return res.status(200).json({
                message: "Recipe created succussfully...",
                data: newComments 
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
export const getAllComments = async(req, res)=>{
    try{
        //get all the data over here
        const getAllData = await CommentsModel.find();
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
 * METHOD: DELETE
 * PATH: /deleteToDoById
 */
export const deleteCommentById  = async(req, res) => {
    try{
        const { id } = req.params;
        const deleteById = await CommentsModel.findByIdAndDelete(id); 
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

