
const users = require("../models/user");
const products = require("../models/product");

const GetAllUsers = async (req, res) => {

const allUserData= await users.find({});
    // res.status(200).json({ msg: "Get All Products...." });
    res.status(200).json({allUserData });
}


const GetAllProducts = async (req, res) => {

const allProductsData= await products.find({});
    // res.status(200).json({ msg: "Get All Products...." });
    res.status(200).json({allProductsData });
    
}



const GetAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "Get All Products Testing...." });
}


module.exports = { GetAllUsers, GetAllProducts, GetAllProductsTesting };
