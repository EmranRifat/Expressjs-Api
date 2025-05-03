const users = require("../models/user");
const products = require("../models/product");

const GetAllUsers = async (req, res) => {
  const allUserData = await users.find({});
  // res.status(200).json({ msg: "Get All Products...." });
  res.status(200).json({ allUserData });
};



const GetAllProducts = async (req, res) => {
  const { name, company } = req.query;
  const queryObject = {};

// for pagination
  let page=Number(req.query.page) || 1;
  let limit=Number(req.query.limit) || 3;
  let skip=(page-1)*limit;


  if (name) {
    queryObject.name = name;
  }

  if (company) {
    queryObject.company = { $regex: company, $options: "i" };
    console.log(queryObject);
  }

  const apiData = await products.find(queryObject).skip(skip).limit(limit);
  console.log(queryObject);

//   const allProductsData = await products.find(queryObject);
  res.status(200).json({ apiData, Total: apiData.length, page, limit });
};





const GetAllProductsTesting = async (req, res) => {
  // const allProducts= await products.find(queryObject);

  res.status(200).json({ msg: "Get All Products Testing...." });
};

module.exports = { GetAllUsers, GetAllProducts, GetAllProductsTesting };
