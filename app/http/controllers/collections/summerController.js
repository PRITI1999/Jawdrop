const Summer = require('../../../models/summer')

function summerController() {
    return {
        async index(req, res) {
            const dresses = await Summer.find()
            return res.render('collections/summer', { dresses: dresses })
        }
    }
}

module.exports = summerController