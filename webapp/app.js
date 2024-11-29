import express from "express";

const app=express()
const port=3000

app.get("/",(req, res)=>{
    res.send("Welcome to DevOps World")

})

app.listen(port, ()=>{
    console.log( `Application is running in ${port}` )
})