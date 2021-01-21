import asyncHandler from 'express-async-handler'
import WishList from "../models/wishListModel";


// @desc    Create new wishList
// @route   POST /api/wishList
// @access  Private
const addWishListItems = asyncHandler(async (req, res) => {
    const {
        wishListItems,

    } = req.body;

    if(wishListItems && wishListItems.length === 0 ){
        res.status(400);
        throw new Error('No items in wish list');
    }else {
        const wishList = new WishList ({
            wishListItems,
            user: req.user._id,
        });

        const createdWishList = await wishList.save();

        res.status(201).json(createdWishList);
    }
});

// @desc    Get wishList by ID
// @route   GET /api/wishList/:id
// @access  Private
const getWishListById = asyncHandler(async (req, res) => {
    const wishList = await WishList.findById(req.params.id).populate('user', 'name email');
    if(wishList){
        res.json(wishList)
    } else {
        res.status(404);
        throw new Error('WishList not found')
    }
});

// @desc    Update wishList to emailed
// @route   GET /api/wishList/:id/email
// @access  Private
const updateWishListToEmailed = asyncHandler(async (req, res) => {
    const wishList = await WishList.findById(req.params.id);

    if(wishList){
        wishList.isEmailed = true;
        wishList.EmailedAt = Date.now();

        const updatedWishList = await wishList.save();
        res.json(updatedWishList);

    }else{
        res.status(404);
        throw new Error('WishList not found')
    }
});


// @desc    GET logged in user wishList
// @route   GET /api/wishList/mywishlists
// @access  Private
const getMyWishLists = asyncHandler(async (req, res) => {
    const wishLists = await WishList.find({ user: req.user._id });
    res.json(wishLists)
});

// @desc    GET all wishLists
// @route   GET /api/wishLists
// @access  Private/Admin
const getWishLists = asyncHandler(async (req, res) => {
    const wishLists = await WishList.find({ }).populate('user', 'id name');
    res.json(wishLists)
});

export { addWishListItems, getWishListById, updateWishListToEmailed, getMyWishLists, getWishLists }
