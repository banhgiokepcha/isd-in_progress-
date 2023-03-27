const mongoose = require('mongoose')
const Schema = mongoose.Schema


const cartSchema = new Schema({

        id: {
            type: Schema.Types.ObjectId,
            ref: 'User'

        },
        quantity: {
            type: Number,
            required: true, 
        }, 
        products: {

            product_id: {
                type: String,
                ref: "Product",
                required: true, 
            },
            title: {
                type: String, 
                required: true,
            },

        }
    }) 

module.exports = mongoose.model(cartSchema, 'Cart')