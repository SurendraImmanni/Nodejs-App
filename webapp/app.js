import express from "express";

const app=express()
const port=3000

app.get("/",(req, res)=>{
    res.send("Welcome to DevOps World, this is my first task");

});

// Export the app for testing purposes
export default app;

// Only start the server if this file is directly executed (not during tests)
if (import.meta.url === new URL(import.meta.url).href) {
app.listen(port, ()=>{
    console.log( `Application is running in ${port}` )
})
}