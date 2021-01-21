import mongoose from 'mongoose'

const wishListSchema = mongoose.Schema({
    // could just be name:String but since we have multiple fields we make it an object
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    wishListItems: [
        {
            name: {type: String, required: true},
            qty: {type: Number, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ],
    isEmailed: {
        type: Boolean,
        required: true,
        default: false
    },
    emailedAt: {
        type: Date
    }
}, {
    //add this second argument and it will add date and time automatically
    timestamps: true
});

// set to mongoose.Model b/c we want to create a model from this schema
const WishList = mongoose.model('WishList', wishListSchema);

export default WishList