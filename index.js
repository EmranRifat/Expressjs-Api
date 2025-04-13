const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const products_route = require("./src/routes/products");
const connectDB = require("./db/connect");


connectDB(); // Connect to MongoDB


const jsonData = {
  message: "Success",
  data: [
    { id: 1, name: "Alice Bili", age: 25 },
    { id: 2, name: "Micle Poly", age: 30 },
    { id: 3, name: "John Doe", age: 28 },
  ],
};


 
  // Middleware to validate token
  const varifyToken = (req, res, next) => {
    const authHeader = req.header("Authorization"); 
    // console.log("Received Authorization Header:", authHeader); 
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    // Extract token (Check if it starts with "Bearer")
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
    // console.log("Extracted Token:", authHeader); 

    // Check if token is valid
    const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    if (token !== validToken) {
      return res.status(403).json({ message: "Forbidden: Invalid token..!" });
    }
    next();
    };



  app.get('/', (req, res) => {
    res.send('welcome to NodeJS World..!');
   })

 

   app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/index.html");
   }
   );



  app.get("/api/data", varifyToken,(req , res) => {
  // const jsonData = {
  //   message: "Success",
  //   data: [
  //     { id: 1, name: "Alice Bili", age: 25 },
  //     { id: 2, name: "Micle poly", age: 30 },
  //     { id: 3, name: "john Doe", age: 28 },
  //   ],
  // };
  res.json(jsonData);
  });

app.use("/api/products", products_route);

  
 app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
 });
