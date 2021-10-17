const db = require('../client');

class Category {
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        };
    };

    static async newCategory(element){
        const newOne = await db.query(`
            INSERT INTO 'category' VALUES($1, $2) RETURNING id;
            `,
            [
                element.name,
                element.color_id
            ]
        );
        return newOne.rows[0];
    }
}

module.exports = Category;
