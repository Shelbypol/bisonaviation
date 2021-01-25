import mongoose from 'mongoose'

const wishListSchema = mongoose.Schema({
    // could just be name:String but since we have multiple fields we make it an object
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    wishListItems: [
        { name: {type: String, required: true},
            qty: {type: Number, required: false},
            image: {type: String, required: true},
            price: {type: Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
            isEmailed: {
                type: Boolean,
                required: false,
                default: false
            },
            emailedAt: {
                type: Date
            },
        }

    ],

}, {
    timestamps: true
});

const WishList = mongoose.model('WishList', wishListSchema);

export default WishList