const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({ 
    _id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String, 
        required: true,
        trim: true,
    },
    description: {
        type: String,

    },
    category: {
        type: String,
        
    },
    brand:{
        type: String, 
        
    },
    price: {
        type: Number,
        required: true
    }, 
    imgURL: {
        data: Buffer,
        contentType: String,
    }

});  
productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema)