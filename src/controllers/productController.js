const ProductItem = require("../models/productItem");

const productController = {
    getAllProducts: async (request, response) => {
        try {
            const products = await ProductItem.findAll();
            response.status(200).json({
                allProducts: products
            });
            console.log(products);
        } catch (error) {
            console.error(error);
        }

    }
}

module.exports = productController;