
// const mongoose = require('mongoose');

// // mongodb+srv://imranrifatdev:<db_password>@cluster0.ni4gi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// // HP3yyuJ2e4RdRZt3
// const uri = "mongodb+srv://imranrifatdev:<HP3yyuJ2e4RdRZt3>@cluster0.ni4gi.mongodb.net/test-db?appName=Cluster0";

// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);

// db/connect.js



const mongoose = require('mongoose');

const uri = "mongodb+srv://imranrifatdev:HP3yyuJ2e4RdRZt3@cluster0.ni4gi.mongodb.net/test-db?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB = async () => {
  // try {
  //   await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  //   console.log("MongoDB connected successfully");
  // } catch (error) {
  //   console.error("MongoDB connection error:", error);
  //   process.exit(1); // Stop the server if connection fails
  // }

  try {
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
      }
};

module.exports = connectDB;
