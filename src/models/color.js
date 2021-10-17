const db = require('../client');

class Color {
    constructor(data){
        for(const prop in data){
            this[prop] = data[prop]
        };
    };
    static async findAll(){
        const colors = await db.query(`
            SELECT * FROM "color";
        `)
        console.log(colors.rows);
        return colors.rows
    }

    static async newColor(element){
        const newColor = await db.query(
            `INSERT INTO 'color' VALUES($1, $2) RETURNING id;`,
            [
                element.name,
                element.hex
            ]
        );
        return newColor.rows[0];
    }
}
module.exports = Color;