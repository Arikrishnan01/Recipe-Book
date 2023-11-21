import  mongoose  from "mongoose";

const RecipeSchema = new mongoose.Schema({
      // _id: String,
  title: {
        type: String,
        required: true,
    },
  recipeImage: {
        type: String,
        required: true,
    },
    recipeVideo: {
        type: String,
        required: true,
    },
  ingredients: {
        type: Array,
        required: true,
  },
  instructions: {
        type: String,
        required: true,
  },
  userId: {
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"Users" 
  },
  createdAt: {
        type: Date,
        default: Date.now,
  },
});

export default mongoose.model('Recipe', RecipeSchema);