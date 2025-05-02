
const users = require("../models/user");
const products = require("../models/product");

const GetAllUsers = async (req, res) => {

const allUserData= await users.find({});
    // res.status(200).json({ msg: "Get All Products...." });
    res.status(200).json({allUserData });
}


const GetAllProducts = async (req, res) => {

const {category,name}= req.query;
const queryObject={};

if(category){
    queryObject.category=category;
}
if(name){
    queryObject.name={$regex:name, $options:"i"};
     console.log(queryObject);
}

console.log(queryObject);

const allProductsData= await products.find(queryObject);
    // res.status(200).json({ msg: "Get All Products...." });
    res.status(200).json({allProductsData });
    
}



const GetAllProductsTesting = async (req, res) => 
{
    
    // const allProducts= await products.find(queryObject);

    res.status(200).json({ msg: "Get All Products Testing...." });
}


module.exports = { GetAllUsers, GetAllProducts, GetAllProductsTesting };
