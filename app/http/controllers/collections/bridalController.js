const Bridal = require('../../../models/bridal')

function bridalController() {
    return {
        async index(req, res) {
            const dresses = await Bridal.find()
            return res.render('collections/bridal', { dresses: dresses })
        }
    }
}

module.exports = bridalController