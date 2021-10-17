const Color = require("../models/color")
const colorController = {

    findAll: async (request, response) => {
        const colors = await Color.findAll()
        console.log(colors.rows);
        response.status(200).json({
            colors
        })
    },

    createNewColor: async (request, response ) => {
        try {
            const color = new Color(request.body);
            const newColor = await color.newColor({
                name: request.body.name,
                hex : request.body.hex
            })
            response.status(200).json({
                newColor
            });
        } catch (error) {
            console.log(error)
        };

        
    }
}
module.exports = colorController;