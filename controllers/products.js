


const GetAllProducts = async (req, res) => {
    res.status(200).json({ msg: "Get All Products...." });
}

const GetAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "Get All Products Testing...." });
}


module.exports = { GetAllProducts, GetAllProductsTesting };
