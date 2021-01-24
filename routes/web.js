const guest = require('../app/http/middlewares/guest')
const homeController = require('../app/http/controllers/homeController');
const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/customers/cartController');
const summerController = require('../app/http/controllers/collections/summerController');
const winterController = require('../app/http/controllers/collections/winterController');
const newController = require('../app/http/controllers/collections/newController');
const bridalController = require('../app/http/controllers/collections/bridalController');

function initRoutes(app) {
    app.get('/', homeController().index)
    app.get('/cart', cartController().index)
    app.get('/login', guest, authController().login)
    app.post('/login', authController().postLogin)
    app.get('/register', guest, authController().register)
    app.post('/register', authController().postRegister)
    app.post('/logout', authController().logout)
    app.get('/summer', summerController().index)
    app.get('/winter', winterController().index)
    app.get('/new', newController().index)
    app.get('/bridal', bridalController().index)
    app.post('/update-cart', cartController().update)
}

module.exports = initRoutes