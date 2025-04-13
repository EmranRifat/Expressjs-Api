
const users = require("../models/user");
const GetAllProducts = async (req, res) => {

const allUserData= await users.find({});
    // res.status(200).json({ msg: "Get All Products...." });
    res.status(200).json({allUserData });
}



const GetAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "Get All Products Testing...." });
}


module.exports = { GetAllProducts, GetAllProductsTesting };
