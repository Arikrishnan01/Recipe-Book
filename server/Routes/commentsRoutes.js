import express from 'express';
import { createComments,
     deleteCommentById,
     getAllComments 
} from '../Controllers/commentsController.js';

const router = express.Router();

router.post('/create', createComments);
router.get("/getAllComments", getAllComments);
router.delete("/:id", deleteCommentById);

/** export the sub router */
const commenstRouters = router;
export default commenstRouters;