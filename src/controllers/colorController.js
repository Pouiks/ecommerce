const { response } = require('express');
const db = require('../client')

class Color {
    constructor(data){
        for (const prop in data) {
            this[prop] = data[prop];
        };
    };

    static async findAll(){
        const colors = await db.query(`
            SELECT * FROM "color";
        `)
        console.log(colors.rows);
        return colors.rows
    }

    static async createNewColor(element){
        try {
            const newColor = db.query(
                `INSERT INTO 'color' VALUES($1, $2) RETURNING id;`,
                [
                    element.name,
                    element.hex
                ]
            );
            response.status(200).json({
                newColor
            });
        } catch (error) {
            console.log(error)
        };

        
    }
}
module.exports = Color