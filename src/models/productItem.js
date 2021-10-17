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

    static async newProduct(element){
        const newProduct = await db.query(`
        INSERT INTO "product_item" VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
        `,
        [
            element.reference,
            element.name,
            element.category,
            element.type,
            element.quantity,
            element.image,
            element.priceHT,
            element.reduction,
            element.color_id,
            element.size_id,
            element.brand_id,
            element.supplier_id
        ]
        );
        if (newProduct.rowCount) {
            this.id = newProduct.rows[0].id;
        }
    }

}

module.exports = ProductItem;