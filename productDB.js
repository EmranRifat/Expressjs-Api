const connectDB = require("./db/connect");
const Product=require("./models/product");
const productJson = require("./products.json");
const start =async ()=>{

    try {
        await connectDB();
        await Product.create(productJson);
        console.log("successful...!!!");
    } 
    
    
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}
start();