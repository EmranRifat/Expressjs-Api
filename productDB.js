const connectDB = require("./db/connect");
const Product = require("./models/product");
const User = require("./models/user");
const data = require("./products.json");



const start = async () => {

  try {
    
    await connectDB(); 
    
    // Clear existing records (optional)
    await Product.deleteMany();
    await User.deleteMany();
    // Insert both products and users
    await Product.create(data.products);
    await User.create(data.users);

    console.log("✅ Products and Users inserted successfully!");
    process.exit(0);
  } 
  
  
  catch (error) {
    console.error("❌ Error inserting data:", error);
    process.exit(1); // Exit with error
  }

};

start();




// const connectDB = require("./db/connect");
// const Product = require("./models/product");
// const productJson = require("./products.json");


// const start = async () => {
//   try {
//     await connectDB();
//     await Product.create(productJson);
//     console.log("  Data inserted successfully...!");
//   } 

//   catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1);
//   }
// };

// start();
