import  express  from "express";
import  {getAllBooks}  from "../controllers/booksController"
const booksRouter= express.Router()

booksRouter.get('/all_books', getAllBooks )


export default booksRouter