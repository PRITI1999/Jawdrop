const New = require('../../../models/new')

function newController() {
    return {
        async index(req, res) {
            const dresses = await New.find()
            return res.render('collections/new', { dresses: dresses })
        }
    }
}

module.exports = newController