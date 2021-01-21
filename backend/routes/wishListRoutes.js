import express from 'express'
const router = express.Router();
import {
    addWishListItems,
    getWishListById,
    updateWishListToEmailed,
    getMyWishLists,
    getWishLists
} from "../controllers/wishListController.js";
import { protect, admin } from '../middleware/authMiddleware.js'


router.route('/').post(protect, addWishListItems).get(protect, admin, getWishLists);

router.route('/mywishlists').get(protect, getMyWishLists);

router.route('/:id').get(protect, getWishListById);

router.route('/:id/emailed').put(protect, updateWishListToEmailed);


export default router