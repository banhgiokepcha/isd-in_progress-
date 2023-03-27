var Product = require('./routes/ProductRou')
var Home = require('./routes/HomeRou')
var User = require('./routes/UserRou')


function route(app) {
    app.use('/', Home) 
    app.use('/product', Product)
    
} 


module.exports = route;