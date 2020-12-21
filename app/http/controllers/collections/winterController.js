const Winter = require('../../../models/winter')

function winterController() {
    return {
        async index(req, res) {
            const dresses = await Winter.find()
            return res.render('collections/winter', { dresses: dresses })
        }
    }
}

module.exports = winterController