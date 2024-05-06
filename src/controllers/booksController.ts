import { Request, Response } from "express";
import { getAllBooksQuery } from "../models/booksModal";

const getAllBooks= async (req:Request, res:Response)=>{
  getAllBooksQuery().then( (data:any)=> {
    res.status(200).send({
      message: 'Successful',
      data:data.rows
    })
  }).catch(e=>{
    res.status(500).send({
      message:"Error!",
      err:e
    })
  })
}

export {getAllBooks}