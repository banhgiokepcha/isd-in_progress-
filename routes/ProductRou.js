var express = require('express')
var router = express.Router()
var ProductCtrl = require('../controllers/ProductCtrl')

router.get('/search', ProductCtrl.SearchProduct)
router.get('/detail/:id', ProductCtrl.ProductDetail) 
router.get('/update', ProductCtrl.GetProductToUpdate)
router.post('/update', ProductCtrl.UpdateProduct)
router.get('/add-product', ProductCtrl.GetAddNewProduct)
router.post('/add-product', ProductCtrl.AddNewProduct)
router.get('/search', ProductCtrl.SearchProduct)
router.post('/search', ProductCtrl.SearchProduct)


module.exports = router;