import {Button, Card, Col, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";

const ProductCategories = ({category, history, productId}) => {

    // const dispatch = useDispatch();
    //
    // const productList = useSelector(state => state.productList);
    // const {loading, error, products, pages, page} = productList;
    //
    //
    // useEffect(() => {
    //     dispatch(listProducts());
    //     // dispatch(listProductsInCat);
    //
    // }, [dispatch]);

    const sortByCategoryHandler = () => {
        console.log(category);
        // history.push(`/cart/${productId}?qty=1`);
    };

    return (
        <>

            <>
                {/*<Button*/}
                {/*    onClick={addToCartHandler}*/}
                {/*    className='btn btn-block global_bisonRedBgWhiteHoverBgBtnRedBorder p-1'*/}
                {/*    type='button'*/}
                {/*    // disabled={product.countInStock === 0 }*/}
                {/*>*/}
                <h6 onClick={sortByCategoryHandler}>
                    {category}
                </h6>
                {/*</Button>*/}
            </>
        </>
    )
};
export default ProductCategories