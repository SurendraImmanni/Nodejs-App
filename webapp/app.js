import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to DevOps World");
});


const server = app.listen(port, () => {
  console.log(`Application is running in ${port}`);
});

export { app, server };  // Export the app for testing

