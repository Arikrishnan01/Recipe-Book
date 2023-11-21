import  mongoose  from "mongoose";

const CommentsSchema = new mongoose.Schema({
  comment: {
        type: String,
        required: true,
    },
  createdAt: {
        type: Date,
        default: Date.now,
  },
});

export default mongoose.model('Comments', CommentsSchema);