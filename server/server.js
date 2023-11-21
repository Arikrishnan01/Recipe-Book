import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import { connectDB } from './Config/db.js';
import bodyParser from 'body-parser';
import userRouters from './Routes/userRoutes.js';
import recipeRouters from './Routes/recipeRoutes.js';
import commenstRouters from './Routes/commentsRoutes.js';

const app = express();
/** CNFIGURE THE DOTENV */
dotenv.config();
const PORT = process.env.PORT;

/**IMPORT THE DB CONNECTION */
connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**CORS */
// app.use(cors());
  app.use(cors());

/**API HOME END POINT */
app.get('/',(req, res) => {
    return res.status(200).json({
        message: "API RUNNING SUCCESSFULLY!!!"
    });
});

/** import the and use the sub router */
app.use('/users', userRouters);
app.use('/recipe', recipeRouters);
app.use('/comment', commenstRouters);


/** SERVER LISTEN WITH PORT NUMBER */
app.listen(PORT, () => {
    console.log(`SERVER STARTED : ${PORT}`.bold.yellow);
});