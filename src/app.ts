import express from "express";
import booksRouter from "./routes/index"
const app= express()
const port =3000

app.use(booksRouter)

app.listen(port, ()=>{
  console.log("Working!")
})