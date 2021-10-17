const db = require('../client');

class ProductItem {
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        };
    };
    // GET ALL PRODUCTS
    static async findAll(){
        const products = await db.query(`
            SELECT * from "product_item";
        `);
        console.log(products.rows);
        return products.rows;
    }

}

module.exports = ProductItem;